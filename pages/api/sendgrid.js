import sendgrid from "@sendgrid/mail";
import ContactForm from "@/components/ContactForm";

/* sendgrid.setApiKey(process.env.SENDGRID_API_KEY) */;

async function sendEmail(req, res) {

   sendgrid.setApiKey(process.env.SENDGRID_API_KEY);


  try {
    await sendgrid.send({
      to: "golde.tischler@gmail.com", // Your email where you'll receive emails
      from: "goldetischlerportfolio@gmail.com", // your website email address here
      subject: `[Lead from website] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <img src="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif" class="logo-image" style="height: 100px;width: 100px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Golde Tischler<br>Full Stack Developer<br>+34 697 83 10 82</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://manuarora.in/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://github.com/goldet/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://linkedin.com/in/golde-tischler/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
              </div>
              </div>
      </body>
      </html>`,
    });

  return res.status(200).json({ success: "success" }); 
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }


/* 
  await res.status(200).json({ error: "" }); */
}

export default sendEmail;