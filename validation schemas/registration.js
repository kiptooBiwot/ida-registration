import { z } from "zod";

export const RegistrationSchema = z.object({
  name: z.string('Your full name is required').min(3, 'You name must be at least three characters long.'),
  email: z.string('Email address is required').email('Invalid email address'),
  phone: z.string().optional(),
  country: z.string('Please select a country'),
  region: z.string('Please select a region/county/district/province as per your country'),
  city: z.string('Please select a city/town closest to you'),
  specificLocation: z.string('The name of where your farm is located is required'),
  farmingPractice: z.string('Select your farming practice.'),
  primaryCrops: z.string('Please add the primary crops you plant in your farm'),
  yearsOfExperience: z.number({
    required_error: "Years is required",
    invalid_type_error: "Years of experience must be a number",
  }).min(0, 'Years of experience cannot be less than 0'),
  farmSize: z.number({
    required_error: "Farm size is required",
    invalid_type_error: "Farm size must be a number",
  }).min(0, 'Farm size cannot be less than zero'),
})