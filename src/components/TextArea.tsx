import React from "react"
import { Field, FieldProps } from "formik"
import * as Radix from "@radix-ui/themes"

export interface TextareaProps {
  name: string
  placeholder: string
}

export const TextArea: React.FC<TextareaProps> = ({
  name,
  placeholder,
  ...props
}) => {
  return (
    <Field name={name}>
      {({ form, field }: FieldProps) => (
        <Radix.TextArea
          {...props}
          value={field.value}
          onChange={(e) => {
            form.setFieldValue(name, e.target.value)
            form.handleChange(e)
          }}
          placeholder={placeholder}
        ></Radix.TextArea>
      )}
    </Field>
  )
}
