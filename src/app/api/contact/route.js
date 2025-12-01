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
      to: process.env.EMAIL_USER, // Change this to your preferred alert email if needed
      subject: `💼 New Career Opportunity from ${name}`,
      html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>High-Impact Career Inquiry</title>

    <!-- [if mso]><noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif] -->

    <style type="text/css">
        /* Global Reset and compatibility fixes */
        body {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            font-family: 'Inter', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
        }
        table {
            border-spacing: 0;
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        td {
            padding: 0;
        }
        img {
            border: 0;
            -ms-interpolation-mode: bicubic;
            max-width: 100%;
            height: auto;
            display: block;
        }
        /* Responsive Media Query */
        @media screen and (max-width: 600px) {
            .container {
                width: 100% !important;
                max-width: 100% !important;
            }
            .main-td {
                padding-left: 15px !important;
                padding-right: 15px !important;
            }
            .header-title {
                font-size: 22px !important;
            }
            .data-label {
                width: 100% !important;
                padding-bottom: 5px !important;
            }
            .detail-row {
                display: block !important;
            }
        }
    </style>
</head>

<body style="margin: 0; padding: 0; background-color: #F6F7F9;">

    <!-- Outer table for background and centering -->
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F6F7F9;">
        <tr>
            <td align="center">

                <!-- Main Email Container (max width 600px) -->
                <table class="container" role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; margin-top: 30px; margin-bottom: 30px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
                    
                    <!-- 1. High-Impact Header Banner (Corporate Navy Blue) -->
                    <tr>
                        <td align="center" style="background-color: #004d99; border-top-left-radius: 12px; border-top-right-radius: 12px; padding: 25px 30px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                    <td align="center">
                                        <div style="font-size: 36px; line-height: 36px; color: #ffffff; margin-bottom: 10px;">
                                            &#x1F91D; <!-- Emoji: Handshake - Represents partnership/hiring -->
                                        </div>
                                        <h1 class="header-title" style="font-size: 26px; color: #ffffff; margin: 0; font-weight: 700;">
                                            New Career Opportunity!
                                        </h1>
                                        <p style="font-size: 14px; color: #C0D6FF; margin: 5px 0 0 0;">
                                            A recruiter/employer has reached out.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td class="main-td" style="padding: 30px;">

                            <!-- 2. Message Overview Text -->
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                    <td style="padding-bottom: 20px;">
                                        <p style="font-size: 16px; color: #222222; margin: 0; font-weight: 600;">
                                            Sender Details:
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- 3. Submission Details (Cleaner Data Block) -->
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 25px; border: 1px solid #E0E4EB; border-radius: 8px;">
                                <tr>
                                    <td style="padding: 15px;">
                                        
                                        <!-- Name Row -->
                                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 8px;">
                                            <tr>
                                                <td class="data-label" width="100" style="font-size: 14px; color: #666666; font-weight: normal; padding-right: 10px; vertical-align: top;">Name:</td>
                                                <td style="font-size: 15px; color: #222222; font-weight: bold; vertical-align: top;">${name}</td>
                                            </tr>
                                        </table>

                                        <!-- Email Row -->
                                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 8px;">
                                            <tr>
                                                <td class="data-label" width="100" style="font-size: 14px; color: #666666; font-weight: normal; padding-right: 10px; vertical-align: top;">Email:</td>
                                                <td style="font-size: 15px; color: #004d99; font-weight: bold; vertical-align: top;"><a href="mailto:${email}" style="color: #004d99; text-decoration: none;">${email}</a></td>
                                            </tr>
                                        </table>
                                        
                                        <!-- Subject Row -->
                                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                            <tr>
                                                <td class="data-label" width="100" style="font-size: 14px; color: #666666; font-weight: normal; padding-right: 10px; vertical-align: top;">Subject:</td>
                                                <td style="font-size: 15px; color: #222222; vertical-align: top;">${subject}</td>
                                            </tr>
                                        </table>
                                        
                                    </td>
                                </tr>
                            </table>

                            <!-- 4. Message Body -->
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                    <td style="padding-bottom: 10px;">
                                        <p style="font-size: 16px; color: #222222; font-weight: 600; margin: 0;">Full Message:</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="background-color: #F6F7F9; padding: 20px; border-radius: 6px;">
                                        <p style="font-size: 15px; color: #555555; margin: 0; white-space: pre-wrap; word-wrap: break-word;">${message}</p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- 5. Footer & CTA -->
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                    <td align="center" style="padding-top: 30px;">
                                        
                                        <!-- Quick Reply Button -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 15px;">
                                            <tr>
                                                <td style="border-radius: 4px; background: #004d99; text-align: center;">
                                                    <a href="mailto:${email}?subject=Re:%20${subject}" target="_blank" style="font-size: 15px; font-weight: bold; text-decoration: none; display: inline-block; padding: 12px 25px; color: #ffffff; border-radius: 4px;">
                                                        Respond to Inquiry &#x27A1;
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>

                                        <p style="font-size: 12px; color: #999999; margin: 0;">
                                            A prompt reply reflects professionalism and reliability. 💼
                                        </p>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                </table>
                <!-- End Main Email Container -->

            </td>
        </tr>
    </table>
    <!-- End Outer Background Table -->

</body>
</html>`,
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
