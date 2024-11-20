"use client";

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { getAuthScheme, getPostSchema, SignUpValidation } from '@/lib/validation'
import { Control, useForm } from 'react-hook-form'
import CustomInput from './CustomInput';
import { FileUploader } from "./FileUploader";
import { Textarea } from "./ui/textarea";
import CustomTextarea from "./CustomTextarea";
import CustomFormField from "./CustomFormField";
import CustomTagsInput from "./CustomTagsInput";

interface FormProps {
  control: Control<any>;
}

const ArtForm = ({ control }: FormProps) => {
  return (
    <div className="text-white">
      <div className="flex flex-col space-y-5">
        <CustomFormField name="image" control={control} renderField={(field, className) => {
          return (
            <FileUploader files={field.value} onChange={field.onChange} />
          )
        }} />
        <CustomInput name="title" label="Title" placeholder="Title of your artwork" control={control} />

        <CustomTextarea name="description" label="Description" placeholder="Description of your artwork" control={control} rows={50} className="h-20" />

        <CustomTagsInput name="tags" label="Tags" placeholder="example, example, example..." control={control} />
      </div>
      <Button type="submit" className="bg-green-400 text-lg w-full mt-10">Submit</Button>
    </div>
  )
}

const StoryForm = ({ control }: FormProps) => {
  return (
    <div className="text-white">
      <div className="flex flex-col space-y-5">
        <CustomInput name="title" label="Title" placeholder="Title of your story" control={control} />

        <CustomTextarea name="description" label="Description" placeholder="Description of your story" control={control} rows={50} className="h-24" />

        <CustomTextarea name="text" label="Text" placeholder="Text of your story" control={control} rows={500} />

        <CustomTagsInput name="tags" label="Tags" placeholder="example, example, example..." control={control} />
      </div>
      <Button type="submit" className="bg-green-400 text-lg w-full mt-10">Submit</Button>
    </div>
  )
}

interface PostFormProps {
  type: "art" | "story";
}


const PostForm = ({ type }: PostFormProps) => {
  const schema = getPostSchema(type);
  const defaultValuesObj = {
    art: {
      type: "art",
      title: "",
      description: "",
      tags: [],
      image: [],
    },
    story: {
      type: "story",
      title: "",
      description: "",
      text: "",
      tags: [],
    }
  }

  const defaultValues = defaultValuesObj[type];

  const form = useForm({ resolver: zodResolver(schema), defaultValues });

  const onSubmit =(values: z.infer<typeof schema>) => {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, (error) => console.log(error))} className='flex flex-col flex-1 px-3 my-12'>
        {type === "art" ? <ArtForm control={form.control} /> : <StoryForm control={form.control} />}
      </form>
    </Form>
  )
}

export default PostForm