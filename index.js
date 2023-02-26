import mongoose from 'mongoose';
import dataEntry from '.model/dataEntry';

mongoose.connect("mongodb+srv://ashKittur:8KCwteOgxFsWPcGQ@cluster0.u5jjh5r.mongodb.net/test")

// Create a new blog post object
const entry = new Entries({
  success: null,
  _id: "example-id",
  patientId: "example-patientID",
  age: 0,
  sex: "example-sex",
  zipCode: "example-zipCode",
  bmi: 0,
  __v: 0,
  examId: "example-examID",
  keyFindings: "example-keyFindings",
  brixiaScores: 0,
  imageURL: "example-imageURL",
  exams: [{
    _id: "example-id",
    patientId: "example-patientID",
    age: 0,
    sex: "example-sex",
    zipCode: "example-zipCode",
    bmi: 0,
    __v: 0,
    examId: "example-examID",
    keyFindings: "example-keyFindings",
    brixiaScores: 0,
    imageURL: "example-imageURL"
  }]
  });
  
  // Insert the article in our MongoDB database
  await entry.save();
