import React from 'react'
import { Control, ControllerRenderProps } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';

interface CustomFormFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  renderField: (field: ControllerRenderProps, ...props: any) => React.ReactNode;
  control: Control<any>;
}

const RenderCustom = ({ field,  props}: { field: ControllerRenderProps, props: CustomFormFieldProps}) => {
 return  props.renderField ? props.renderField(field, props) : null;
}

const CustomFormField = (props: CustomFormFieldProps) => {
  const { name, control, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className="text-md font-medium text-white">{label}</FormLabel>}
          <FormControl>
            <RenderCustom field={field} props={props} />
          </FormControl>
          <FormMessage className="text-white font-light" />
        </FormItem>
      )}
    />
  )
}

export default CustomFormField