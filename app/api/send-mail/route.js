const nodemailer = require("nodemailer");
import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
  const req = await request.json();
  console.log(req.email);

  const message = {
    from: "Andrei Royal <noreply@RoyalDev.com>",
    subject: "New user",
    to: "mrrki3334@gmail.com",
    name: req.name,
    email: req.email,
    phone: req.phone,
    message: req.message,
    html: `<h1>Name: ${req.name}</h1> <h2>Email : ${req.email}</h2><h2>Phone-Number : ${req.phone}<h2/><h4>Message:<span>${req.message}</span></h4>`,
  };
  console.log(message);
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.MAILER_USERNAME,
      pass: process.env.MAILER_PASSWORD,
    },
  });

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  return NextResponse.json({ req });
}
// export async function GET(req) {

//     console.log('get');
//     return 'okay';
// }
// export default function handler(req, res) {

// }
