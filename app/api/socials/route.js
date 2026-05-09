import { NextResponse } from 'next/server';
import { getSocials } from '../../../src/shared/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const socials = await getSocials();
    return NextResponse.json(
      { socials },
      {
        headers: {
          'Cache-Control': 'no-store, max-age=0, no-cache, must-revalidate',
          Pragma: 'no-cache',
          Expires: '0',
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error?.message ?? 'Ошибка загрузки socials' },
      { status: 500 }
    );
  }
}
