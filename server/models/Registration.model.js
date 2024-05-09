import { Schema, model } from 'mongoose'

const registrationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  country: {
    type: String
  },
  region: {
    type: String
  },
  city: {
    type: String
  },
  specificLocation: {
    type: String
  },
  farmingPractice: {
    type: String
  },
  otherPractices: {
    type: String
  },
  primaryCrops: {
    type: Array
  },
  yearsOfExperience: {
    type: Number
  },
  farmSize: {
    type: Number
  }
}, { timestamps: true })

export default model('Registration', registrationSchema)