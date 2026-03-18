import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // ── 1. Notification to Chef Christian ────────────────────────────────────
    const { error: notifyError } = await resend.emails.send({
      from: "Chef Christian Portfolio <hello@chef-ck-unlimited.com>",
      to: ["Ckabilambali@gmail.com"],
      reply_to: email,
      subject: `[Portfolio] New Inquiry from ${name}: ${subject}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#080706;font-family:Arial,sans-serif;color:#F5F0E8;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#080706;padding:40px 0;">
  <tr><td align="center">
    <table width="580" cellpadding="0" cellspacing="0" style="background:#0E0D0B;border:1px solid rgba(201,168,76,0.2);max-width:580px;width:100%;">

      <!-- Header -->
      <tr><td style="padding:32px 40px 24px;border-bottom:1px solid rgba(201,168,76,0.1);">
        <table width="100%" cellpadding="0" cellspacing="0"><tr>
          <td>
            <div style="display:inline-block;border:1px solid rgba(201,168,76,0.5);padding:7px 15px;">
              <span style="font-family:Georgia,serif;font-size:14px;color:#C9A84C;letter-spacing:0.1em;">CK</span>
            </div>
          </td>
          <td align="right">
            <span style="font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(201,168,76,0.55);">New Portfolio Inquiry</span>
          </td>
        </tr></table>
      </td></tr>

      <!-- Subject -->
      <tr><td style="padding:28px 40px 6px;">
        <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.26em;text-transform:uppercase;color:rgba(201,168,76,0.55);">Subject</p>
        <h1 style="margin:0;font-family:Georgia,serif;font-size:26px;font-weight:300;font-style:italic;color:#F5F0E8;line-height:1.25;">${subject}</h1>
      </td></tr>

      <!-- Gold rule -->
      <tr><td style="padding:18px 40px 0;">
        <div style="height:1px;background:linear-gradient(to right,rgba(201,168,76,0.45),rgba(201,168,76,0.04));"></div>
      </td></tr>

      <!-- Sender card -->
      <tr><td style="padding:22px 40px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(201,168,76,0.04);border:1px solid rgba(201,168,76,0.12);">
          <tr><td style="padding:18px 22px;">
            <table width="100%" cellpadding="0" cellspacing="0"><tr>
              <td>
                <p style="margin:0 0 2px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(245,240,232,0.28);">From</p>
                <p style="margin:0;font-size:16px;color:#F5F0E8;">${name}</p>
              </td>
              <td align="right" valign="top">
                <p style="margin:0 0 2px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(245,240,232,0.28);">Reply to</p>
                <a href="mailto:${email}" style="font-size:14px;color:#C9A84C;text-decoration:none;">${email}</a>
              </td>
            </tr></table>
          </td></tr>
        </table>
      </td></tr>

      <!-- Message -->
      <tr><td style="padding:0 40px 30px;">
        <p style="margin:0 0 10px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(245,240,232,0.28);">Message</p>
        <div style="border-left:2px solid rgba(201,168,76,0.4);padding:14px 18px;background:rgba(255,255,255,0.02);">
          <p style="margin:0;font-size:15px;line-height:1.85;color:rgba(245,240,232,0.75);white-space:pre-wrap;">${message}</p>
        </div>
      </td></tr>

      <!-- CTA -->
      <tr><td style="padding:0 40px 32px;">
        <a href="mailto:${email}?subject=Re: ${subject}" style="display:inline-block;background:#C9A84C;color:#080706;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;padding:13px 26px;text-decoration:none;font-weight:600;">
          Reply to ${name} &rarr;
        </a>
      </td></tr>

      <!-- Footer -->
      <tr><td style="padding:18px 40px 26px;border-top:1px solid rgba(201,168,76,0.08);">
        <p style="margin:0;font-size:11px;color:rgba(245,240,232,0.2);line-height:1.6;">
          Sent via the contact form on chef-ck-unlimited.com
        </p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`,
    });

    if (notifyError) {
      console.error("Resend notify error:", notifyError);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    // ── 2. Auto-reply to the visitor ─────────────────────────────────────────
    await resend.emails.send({
      from: "Chef Christian Kabilambali <hello@chef-ck-unlimited.com>",
      to: [email],
      subject: "Thank you for reaching out — Chef Christian",
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#080706;font-family:Arial,sans-serif;color:#F5F0E8;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#080706;padding:40px 0;">
  <tr><td align="center">
    <table width="580" cellpadding="0" cellspacing="0" style="background:#0E0D0B;border:1px solid rgba(201,168,76,0.2);max-width:580px;width:100%;">

      <!-- Header -->
      <tr><td style="padding:32px 40px 24px;border-bottom:1px solid rgba(201,168,76,0.1);">
        <div style="display:inline-block;border:1px solid rgba(201,168,76,0.5);padding:7px 15px;">
          <span style="font-family:Georgia,serif;font-size:14px;color:#C9A84C;letter-spacing:0.1em;">CK</span>
        </div>
      </td></tr>

      <!-- Greeting -->
      <tr><td style="padding:32px 40px 6px;">
        <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.26em;text-transform:uppercase;color:rgba(201,168,76,0.55);">Message Received</p>
        <h1 style="margin:0;font-family:Georgia,serif;font-size:28px;font-weight:300;font-style:italic;color:#F5F0E8;line-height:1.2;">Thank you, ${name}</h1>
      </td></tr>

      <!-- Gold rule -->
      <tr><td style="padding:18px 40px 0;">
        <div style="height:1px;background:linear-gradient(to right,rgba(201,168,76,0.45),rgba(201,168,76,0.04));"></div>
      </td></tr>

      <!-- Body -->
      <tr><td style="padding:26px 40px 30px;">
        <p style="margin:0 0 16px;font-size:15px;line-height:1.85;color:rgba(245,240,232,0.7);">
          I have received your message regarding <em style="color:#C9A84C;">&ldquo;${subject}&rdquo;</em> and will get back to you as soon as possible &mdash; typically within 24 hours.
        </p>
        <p style="margin:0 0 24px;font-size:15px;line-height:1.85;color:rgba(245,240,232,0.7);">
          In the meantime, follow along on Instagram for behind-the-scenes culinary content from the kitchen.
        </p>
        <a href="https://instagram.com/chef_ck_unlimited_" style="display:inline-block;background:transparent;border:1px solid rgba(201,168,76,0.4);color:#C9A84C;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;padding:11px 22px;text-decoration:none;">
          @ck_unlimited &nbsp;&rarr;
        </a>
      </td></tr>

      <!-- Signature -->
      <tr><td style="padding:20px 40px 32px;border-top:1px solid rgba(201,168,76,0.08);">
        <p style="margin:0 0 3px;font-family:Georgia,serif;font-size:19px;font-style:italic;font-weight:300;color:#F5F0E8;">Chef Christian Kabilambali</p>
        <p style="margin:0 0 2px;font-size:11px;color:rgba(245,240,232,0.28);letter-spacing:0.1em;">Jr. Sous Chef &middot; CHOIX par Pierre Gagnaire &middot; Dubai</p>
        <p style="margin:4px 0 0;font-size:11px;color:rgba(201,168,76,0.4);">chef-ck-unlimited.com</p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
