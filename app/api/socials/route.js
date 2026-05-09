import { NextResponse } from 'next/server';
import { getSocials } from '../../../src/shared/lib/supabase';

export async function GET() {
  try {
    const socials = await getSocials();
    return NextResponse.json({ socials });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message ?? 'Ошибка загрузки socials' },
      { status: 500 }
    );
  }
}
