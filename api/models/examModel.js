const mongoose = require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  patientId: {
    type: String,
    requried: true
  },
  age: {
    type: Number,
    requried: true
  },
  sex: {
    type: String,
    requried: true
  },
  zipCode: {
    type: String,
    requried: true
  },
  BMI: {
    type: Number,
    requried: true
  },
  examId: {
    type: String,
    requried: true
  },
  keyFindings: {
    type: String,
    requried: true
  },
  brixiaScores: {
    type: String,
    requried: true
  },
  imageURL: {
    type: String,
  }
}, { timestamps: true })

module.exports = mongoose.model('Exam', examSchema)
