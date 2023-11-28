import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import ReviewSubmission from './models/subrev.js';
import multer from "multer";
import path from "path";
import Back from './models/user.js'

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: (req,file,cb) =>{
    cb(null, 'public/imgs')
  },
  filename: (req,file,cb) =>{
    cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage:storage
})

app.post('/uploadimage', upload.single('file'),(req, res) => {
  Back.create({image: req.file.filename})
  .then(result => res.json(result))
  .catch(err => console.log(err))
})

app.get('/getimage', (req,res)=>{
  Back.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))
})


// mongoose.connect('mongodb+srv://UdayTeja:7x41xxKxJHXIwM7W@test.oe9ua4p.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://iamvsanup:H4xL4kjQ76snMEsA@driveready.0udnccc.mongodb.net/DriveReady?retryWrites=true&w=majority')
  .then(() => app.listen(5000))
  .then(() => console.log("Connected to Database & Listening to localhost 5000"))
  .catch((err) => console.log(err));

app.post('/addsubmit', (req, res, next) => {
  console.log(req.body.reviewForm);

  const { name, email, comments } = req.body.reviewForm;

  const rev = new ReviewSubmission({
    name,
    email,
    comments
  });

  try {
    rev.save();
    sendEmail(name, email); // Send an email to the user
    return res.send({ msg: "Review Submitted Successfully" });
  } catch (err) {
    console.log(err);
  }
});

function sendEmail(name, userEmail) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'iamvsanup@gmail.com',
      pass: 'veke ysrf tdyj mrxw'
    }
  });

  var mailOptions = {
    from: 'iamvsanup@gmail.com',
    to: userEmail, // Use the user's email provided in the form
    subject: 'Thanks for submitting your review',
    text: `Dear ${name},\n\nThanks for submitting your review. Hope you like our website!!\n\n-Svaadisht`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}






