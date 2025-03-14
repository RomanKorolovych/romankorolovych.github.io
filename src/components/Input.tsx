import React from "react"
import { Field } from "formik"
import { TextField } from "@radix-ui/themes"

export interface InputProps {
  name: string
  placeholder: string
}

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  ...props
}) => {
  return (
    <Field name={name}>
      {({ form, field }) => (
        <TextField.Root
          {...props}
          value={field.value}
          onChange={(e) => {
            form.setFieldValue(name, e.target.value)
            form.handleChange(e)
          }}
          placeholder={placeholder}
        ></TextField.Root>
      )}
    </Field>
  )
}
