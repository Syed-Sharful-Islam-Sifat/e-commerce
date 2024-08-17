import HttpError from "@/lib/helpers/HttpError";
import nodemailer from "nodemailer";
const sendEmailToUser =  ({mailOptions}) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASS
        },
      });

      transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
          console.log(error)
          throw new HttpError(500,"Something went wrong")
        }else{
            console.log("Email sent: " + info.response);
        }
      })
};

export {
  sendEmailToUser
}
