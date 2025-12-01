import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required!' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Message from ${name}`,
      html: `
    <div style="
      width:100%;
      background:#f4f4f4;
      padding:20px;
      font-family:Arial, sans-serif;">
      
      <div style="
        max-width:600px;
        margin:auto;
        background:white;
        padding:20px;
        border-radius:12px;
        box-shadow:0 4px 12px rgba(0,0,0,0.1);
      ">
        
        <h2 style="color:#6a0dad; margin-bottom:10px; text-align:center;">
          🚀 New Message Received
        </h2>
        
        <p style="font-size:16px; color:#333;">
          You have received a new message from your website contact form.
        </p>

        <div style="
          background:#fafafa;
          padding:15px;
          border-radius:10px;
          margin-top:15px;
          border-left:4px solid #6a0dad;
        ">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p style="margin-top:10px;"><strong>Message:</strong><br/>${message}</p>
        </div>

        <br />

        <p style="font-size:14px; color:#555; text-align:center;">
          Sent from your portfolio – stay awesome! ✨
        </p>

      </div>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ success: false, error: 'Server error!' }, { status: 500 });
  }
}
