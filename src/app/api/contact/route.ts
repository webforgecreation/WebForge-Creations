import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, message } = body;

    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
    }

    const serviceLabels: Record<string, string> = {
      'payment-gateway': 'Payment Gateway',
      'fintech-web': 'Fintech Web Development',
      'payout': 'Payout Services',
      'bbps': 'BBPS Integration',
      'dmt': 'Money Transfer DMT',
      'pos': 'POS Machines',
      'design': 'Website & App Design',
      'insurance': 'Insurance SDK & API',
      'custom': 'Custom Software Development',
      'cloud': 'Cloud Infrastructure',
      'ai': 'AI Analytics Solutions',
    };

    const serviceLabel = serviceLabels[service] || service;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 24px; border-radius: 8px;">
        <div style="background: #1e3a5f; padding: 20px 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
          <p style="color: #93c5fd; margin: 4px 0 0; font-size: 14px;">WebForge Creations — webforgecreation@gmail.com</p>
        </div>
        <div style="background: #ffffff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; width: 140px; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px;">${company}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px;">${serviceLabel}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; vertical-align: top; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</td>
              <td style="padding: 10px 0; color: #111827; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 6px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af; font-size: 13px;">Reply directly to this email to respond to <strong>${name}</strong> at <strong>${email}</strong>.</p>
          </div>
        </div>
      </div>
    `;

    const payload = {
      sender: {
        name: 'WebForge Creations Website',
        email: 'webforgecreation@gmail.com',
      },
      to: [
        {
          email: 'webforgecreation@gmail.com',
          name: 'WebForge Creations',
        },
      ],
      replyTo: {
        email: email,
        name: name,
      },
      subject: `New Enquiry: ${serviceLabel} — ${name}`,
      htmlContent,
    };

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Brevo API error:', errorData);
      return NextResponse.json(
        { error: errorData?.message || 'Failed to send email. Please try again.' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}