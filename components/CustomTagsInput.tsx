import React from 'react'
import { Control } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { TagsInput } from './ui/tags-input';


interface TagsInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  control: Control<any>;
}

const CustomTagsInput = ({ name, label, control, className, placeholder, ...props }: TagsInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-md font-medium text-white">{label}</FormLabel>
          <FormControl>
            <TagsInput value={field.value} onValueChange={field.onChange} placeholder={placeholder} className="bg-gray-700"  />
          </FormControl>
          <FormMessage className="text-white font-light" />
        </FormItem>
      )}
    />
  )
}

export default CustomTagsInput;