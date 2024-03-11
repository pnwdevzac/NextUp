import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'abbey.nikolaus25@ethereal.email',
        pass: 'eZwtnJnT6x6T2MdGEw',
      },
    });

    const mailOptions = {
      from: email,
      to: 'zbh206@gmail.com',
      subject: 'New message from your website',
      text: message,
    };

    transporter.sendMail(mailOptions, function(error: any, info: any){
      if (error) {
        console.log(error);
        res.status(500).send(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ status: 'Email sent' });
      }
    });
  } else {
    res.status(405).json({ status: 'Method not allowed' });
  }
}
