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

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  control: Control<any>;
}

const CustomInput = ({ name, label, control, className, ...props }: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-md font-medium text-white">{label}</FormLabel>
          <FormControl>
            <Input placeholder={props.placeholder} {...field} className={cn("bg-gray-700 h-11 text-sm border-gray-600 placeholder:font-extralight focus-visible:ring-0 focus-visible:ring-offset-0", className)} type={props.type} />
          </FormControl>
          <FormMessage className="text-white font-light" />
        </FormItem>
      )}
    />
  )
}

export default CustomInput