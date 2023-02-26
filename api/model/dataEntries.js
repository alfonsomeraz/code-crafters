import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const dataEntry = new Schema({
  success: Boolean,
  _id: String,
  patientId: String,
  age: Number,
  sex: String,
  zipCode: String,
  bmi: Number,
  __v: Number,
  examId: String,
  keyFindings: String,
  brixiaScores: Number,
  imageURL: String,
  exams: [{
    _id: String,
    patientId: String,
    age: Number,
    sex: String,
    zipCode: String,
    bmi: Number,
    __v: Number,
    examId: String,
    keyFindings: String,
    brixiaScores: Number,
    imageURL: String
  }]
});

const Entries = model('Entries', dataEntry);
export default Entries;
