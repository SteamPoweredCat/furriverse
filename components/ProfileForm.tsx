"use client"


import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  cn,
  formatDateTime
} from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  PhoneInput
} from "@/components/ui/phone-input";
import {
  format
} from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import {
  Calendar
} from "@/components/ui/calendar"
import {
  Calendar as CalendarIcon
} from "lucide-react"

import { ProfileValidation } from "@/lib/validation"
import CustomFormField from "./CustomFormField"
import CustomInput from "./CustomInput"
import CustomTextarea from "./CustomTextarea"
import { FileUploader } from "./FileUploader"



export default function ProfileForm() {
  const form = useForm < z.infer < typeof ProfileValidation >> ({
    resolver: zodResolver(ProfileValidation),
    defaultValues: {
      name: "",
      phone: "",
      bio: "",
      address: "",
      city: "",
      zipcode: "",
      state: "",
      country: "",
      dateOfBirth: undefined,
      profileImage: [],
    },
  })

  function onSubmit(values: z.infer < typeof ProfileValidation > ) {
    const { name, phone, bio, address, city, zipcode, state, country, dateOfBirth, profileImage } = values;

    if (!name && !phone && !bio && !address && !city && !zipcode && !state && !country && !dateOfBirth && profileImage.length === 0) {
      return;
    }

    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-white mb-10">Edit Profile</h1>
        
        <div className="space-y-3">
          <CustomFormField name="profileImage" label="Profile Image" control={form.control} renderField={(field, props) => (
            <FileUploader onChange={field.onChange} files={field.value} />
          )} />

          <CustomInput name="name" label="Name" placeholder="Michael Jones" control={form.control} />

          <CustomFormField name="phone" label="Phone" placeholder="(111) 111-1111" control={form.control} renderField={(field, props) => (
            <PhoneInput {...field}  />
          )} />

          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-white text-md">Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal bg-gray-700 border-gray-600 text-white ",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "MM/dd/yyyy")
                        ) : (
                          <span className="text-gray-500">Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50 stroke-white" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-gray-700" align="center" side="bottom">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                      classNames={{
                        cell: "text-white",
                        day_selected: "rounded-full bg-gray-800",
                        day_today: "rounded-full border",
                      }}
                    />
                  </PopoverContent>
                </Popover>
            
                <FormMessage />
              </FormItem>
            )}
          />


          <CustomTextarea name="bio" label="Bio" placeholder="Tell us about yourself" control={form.control}  />

          <CustomInput name="address" label="Address" placeholder="1234 Fake St. Fake" control={form.control} />

          <div className="grid grid-cols-2 gap-4">
            <CustomInput name="city" label="City" placeholder="Los Angeles" control={form.control} />
            <CustomInput name="zipcode" label="Zipcode" placeholder="12345" control={form.control} />        
          </div>

          <div className="grid grid-cols-2 gap-4">
            <CustomInput name="state" label="State" placeholder="California" control={form.control} />
            <CustomInput name="country" label="Country" placeholder="United States" control={form.control} />
          </div>
        </div>
        <Button className="bg-green-400 text-md mt-10" type="submit">Submit</Button>
      </form>
    </Form>
  )
}