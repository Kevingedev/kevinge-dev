import type { APIRoute } from "astro";
import { Resend } from "resend";

export const POST: APIRoute = async ({ request }) => {
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    try {
        const { name, email, message } = await request.json();

        // Simple validation
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({
                    message: "Faltan campos requeridos.",
                }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                }
            );
        }

        // Email sending via Resend
        const { data: resendData, error } = await resend.emails.send({
            from: "Kevin Portfolio <onboarding@resend.dev>",
            to: ["kevingerardoruiz.2001@gmail.com"],
            subject: `🚀 Nuevo Proyecto: Mensaje de ${name}`,
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #050000; margin: 0; padding: 0; color: #ffffff; }
              .container { max-width: 600px; margin: 40px auto; background: #0a0101; border: 1px solid #ef444433; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
              .header { background: linear-gradient(135deg, #ef4444 0%, #991b1b 100%); padding: 30px; text-align: center; }
              .header h1 { margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
              .content { padding: 40px; }
              .field { margin-bottom: 25px; }
              .label { color: #ef4444; font-size: 12px; font-weight: 700; text-transform: uppercase; tracking-spacing: 1px; margin-bottom: 5px; }
              .value { color: #ffffff; font-size: 16px; line-height: 1.6; }
              .message-box { background: #111111; border-radius: 12px; padding: 20px; border-left: 4px solid #ef4444; margin-top: 10px; }
              .footer { padding: 20px; text-align: center; border-top: 1px solid #ffffff11; background: #070000; }
              .footer p { color: #666666; font-size: 12px; margin: 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Nuevo Mensaje de Contacto</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Remitente</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email de contacto</div>
                  <div class="value"><a href="mailto:${email}" style="color: #ffffff; text-decoration: underline;">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Mensaje</div>
                  <div class="message-box">
                    <div class="value">${message.replace(/\n/g, '<br>')}</div>
                  </div>
                </div>
              </div>
              <div class="footer">
                <p>Este correo fue enviado desde tu portafolio personal.</p>
              </div>
            </div>
          </body>
        </html>
      `,
        });

        if (error) {
            console.error(error);
            return new Response(
                JSON.stringify({
                    message: "Error al enviar el email.",
                    error: error,
                }),
                {
                    status: 500,
                    headers: { "Content-Type": "application/json" }
                }
            );
        }

        return new Response(
            JSON.stringify({
                message: "¡Mensaje enviado con éxito!",
                data: resendData,
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" }
            }
        );
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({
                message: "Error interno del servidor.",
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" }
            }
        );
    }
};
