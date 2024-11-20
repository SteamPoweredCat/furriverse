import { z } from "zod";

export const SignUpValidation = z.object({
  email: z.string().email("Email address must be valid"),
  password: z.string().min(8),
  username: z.string().min(3),
})

export const SignInValidation = z.object({
  email: z.string().email("Email address must be valid"),
  password: z.string().min(8),
})

export const getAuthScheme = (type: "login" | "register") => {
  switch (type) {
    case "login":
      return SignInValidation
    case "register":
      return SignUpValidation
    default:
      return SignInValidation
  }
}

export const ArtValidation = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  tags: z.array(z.string()).optional(),
  image: z.custom<File[]>(),
})

export const StoryValidation = z.object({
  title: z.string().min(3),
  text: z.string().min(10),
  tags: z.array(z.string()).optional(),
})

export const ProfileValidation = z.object({
  name: z.string().optional(),
  phone: z.string().optional(),
  dateOfBirth: z.coerce.date().optional(),
  bio: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  zipcode: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  profileImage: z.custom<File[]>(),
})

export const getPostSchema = (type: "art" | "story") => {
  switch (type) {
    case "art":
      return ArtValidation
    case "story":
      return StoryValidation
    default:
      return ArtValidation
  }
}