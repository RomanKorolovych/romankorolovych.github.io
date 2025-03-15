"use client"

import React from "react"
import { NEW_TASK } from "@/constants"

import { useTasks } from "@/hooks/useTasks"

import { Dialog, Button, Flex } from "@radix-ui/themes"
import { Formik, Form } from "formik"
import { Input } from "@/components/Input"
import { TextArea } from "@/components/TextArea"

export interface CreateProps {
  children: React.ReactNode | React.ReactNode[]
}

export const Create: React.FC<CreateProps> = ({ children }) => {
  const { createTask } = useTasks()

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>What would you like to do?</Dialog.Title>
        <Dialog.Description>
          <Formik initialValues={NEW_TASK} onSubmit={createTask}>
            {() => (
              <Form>
                <Input name="name" placeholder="Name" />
                <TextArea name="description" placeholder="Description" />
                <Flex gap="3" mt="4" justify="end">
                  <Dialog.Close>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </Dialog.Close>
                  <Dialog.Close>
                    <Button type="submit">Save</Button>
                  </Dialog.Close>
                </Flex>
              </Form>
            )}
          </Formik>
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Root>
  )
}
