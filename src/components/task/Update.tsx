"use client"

import React from "react"
import { Task } from "@/types/task"

import { useTasks } from "@/hooks/useTasks"

import { Dialog, Button, Flex } from "@radix-ui/themes"
import { Formik, Form } from "formik"
import { Input } from "@/components/Input"
import { TextArea } from "@/components/TextArea"

export interface UpdateProps {
  id: Task["id"]
}

export const Update: React.FC<UpdateProps> = ({ id }) => {
  const { tasks, updateTask } = useTasks()
  const task = tasks.find((task) => task.id === id)

  if (!task) return null

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Update</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>Changed your mind?</Dialog.Title>
        <Dialog.Description>
          <Formik
            initialValues={{
              name: task.name,
              description: task.description
            }}
            onSubmit={(payload) => updateTask(id, payload)}
          >
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
                    <Button type="submit">Update</Button>
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
