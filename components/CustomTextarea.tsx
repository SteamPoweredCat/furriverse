import React from 'react'
import { 
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { Control } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Textarea } from './ui/textarea';

interface CustomTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  control: Control<any>;
}

const CustomTextarea = ({ name, label, control, className, ...props }: CustomTextareaProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-md font-medium text-white">{label}</FormLabel>
          <FormControl>
            <Textarea placeholder={props.placeholder} {...field} className={cn("bg-gray-700 h-[200px] text-sm text-white border-gray-600 placeholder:font-extralight focus-visible:ring-0 focus-visible:ring-offset-0", className)} rows={props.rows} />
          </FormControl>
          <FormMessage className="text-white font-light" />
        </FormItem>
      )}
    />
  )
}

export default CustomTextarea