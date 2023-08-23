const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jabed.swe@gmail.com",
    pass: "gutvnxodzszudvuh",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mail = {
    from: email,
    to: "jabed.swe@gmail.com",
    subject: "Contact Form Submission",
    html: `
      <p>Name: ${firstName} ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json({ code: 500, message: "Error sending email" });
    } else {
      res.json({ code: 200, message: "Message sent successfully" });
    }
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
