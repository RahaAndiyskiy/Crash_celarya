'use client';

import { useEffect, useState } from 'react';

const defaultSocialLinks = {
  instagram: '/socials',
  telegram: 'https://t.me/crushschooltrends',
  vk: '/socials',
  tiktok: '/socials',
  youtube: '/socials',
  pinterest: '/socials',
  likee: '/socials',
};

const normalize = (value) => String(value ?? '').trim().toLowerCase();

export function useSocialLinks() {
  const [links, setLinks] = useState(defaultSocialLinks);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let canceled = false;

    async function load() {
      try {
        const response = await fetch('/api/socials');
        const payload = await response.json();

        console.log('[useSocialLinks] /api/socials payload', payload);

        if (!response.ok) {
          throw new Error(payload.error || 'Ошибка загрузки socials');
        }

        if (canceled) {
          return;
        }

        const nextLinks = { ...defaultSocialLinks };

        if (!Array.isArray(payload.socials)) {
          console.log('[useSocialLinks] socials is not array', payload.socials);
        } else {
          payload.socials.forEach((item) => {
            const key = normalize(item.name);
            const url = String(item.url ?? item.href ?? item.link ?? '').trim();
            console.log('[useSocialLinks] map row', { name: item.name, key, url, item });
            if (key && url) {
              nextLinks[key] = url;
            }
          });
        }

        console.log('[useSocialLinks] final links', nextLinks);
        setLinks(nextLinks);
      } catch (err) {
        if (!canceled) {
          setError(err?.message ?? 'Ошибка загрузки socials');
        }
      } finally {
        if (!canceled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      canceled = true;
    };
  }, []);

  return { links, loading, error };
}
