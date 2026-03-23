import { NextResponse } from 'next/server';
import { z } from 'zod';

const payloadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().min(2),
  message: z.string().min(10)
});

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = payloadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const endpoint = process.env.FORMSPREE_ENDPOINT;

  if (!endpoint) {
    console.warn('[contact] FORMSPREE_ENDPOINT is not configured.');
    return NextResponse.json({ ok: true, mocked: true });
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(parsed.data)
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'Unable to submit form' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
