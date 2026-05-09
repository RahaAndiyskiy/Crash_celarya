import { createClient } from '@supabase/supabase-js';

function loadEnvLocal() {
  try {
    const fs = require('fs');
    const path = require('path');
    const envPath = path.join(process.cwd(), '.env.local');
    if (!fs.existsSync(envPath)) {
      return {};
    }

    const raw = fs.readFileSync(envPath, 'utf8') as string;
    const lines = raw
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line): line is string => !!line && !line.startsWith('#'));

    return lines.reduce((acc: Record<string, string>, line: string) => {
      const index = line.indexOf('=');
      if (index === -1) return acc;
      const key = line.slice(0, index).trim();
      const value = line.slice(index + 1).trim();
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);
  } catch {
    return {};
  }
}

const localEnv = loadEnvLocal();
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || localEnv.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || localEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export async function getSocials() {
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { data, error } = await supabase
    .from('socials')
    .select('*')
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  if (error) {
    throw error;
  }

  return data ?? [];
}
