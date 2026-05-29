import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (typeof name !== 'string' || !name.trim()) {
    return NextResponse.json({ error: 'Name required' }, { status: 400 });
  }
  if (typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
  }
  if (typeof message !== 'string' || !message.trim()) {
    return NextResponse.json({ error: 'Message required' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log('[contact] RESEND_API_KEY not set — logging message instead');
    console.log(`From: ${name} <${email}>\nMessage: ${message}`);
    return NextResponse.json({ ok: true });
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'Ayenantú Web <noreply@ayenantu.cl>',
      to: 'ayenantu@gmail.com',
      replyTo: email,
      subject: `Mensaje de contacto de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Email send error:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 502 });
  }
}
