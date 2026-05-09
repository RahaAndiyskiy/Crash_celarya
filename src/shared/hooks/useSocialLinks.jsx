'use client';

import { useEffect, useMemo, useState } from 'react';

const normalize = (value) => String(value ?? '').trim().toLowerCase();

const buildLinksFromRows = (rows) => {
  if (!Array.isArray(rows)) {
    return {};
  }

  return rows.reduce((acc, item) => {
    const key = normalize(item?.name);
    const url = String(item?.url ?? item?.href ?? item?.link ?? '').trim();

    if (!key || !url) {
      return acc;
    }

    acc[key] = url;
    return acc;
  }, {});
};

export function useSocialLinks() {
  const [socialRows, setSocialRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const links = useMemo(() => buildLinksFromRows(socialRows), [socialRows]);

  useEffect(() => {
    let canceled = false;

    async function load() {
      try {
        setLoading(true);
        const response = await fetch(`/api/socials?cache-bust=${Date.now()}`, { cache: 'no-store' });
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload.error || 'Ошибка загрузки socials');
        }

        if (canceled) {
          return;
        }

        setSocialRows(Array.isArray(payload.socials) ? payload.socials : []);
        setError('');
      } catch (err) {
        if (!canceled) {
          setError(err?.message ?? 'Ошибка загрузки socials');
          setSocialRows([]);
        }
      } finally {
        if (!canceled) {
          setLoading(false);
        }
      }
    }

    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && !canceled) {
        load();
      }
    };

    load();
    window.addEventListener('focus', handleVisibility);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      canceled = true;
      window.removeEventListener('focus', handleVisibility);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return { links, loading, error };
}
