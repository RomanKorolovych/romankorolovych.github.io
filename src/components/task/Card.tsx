import React from "react"

import { Task } from "@/types/task"
import { Resolve } from "./Resolve"
import { Update } from "./Update"
import { Delete } from "./Delete"
import {
  Card as BaseCard,
  Text,
  Box,
  Heading,
  Grid,
  Flex,
} from "@radix-ui/themes"

export interface TaskCardProps {
  task: Task
}

export const Card: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <BaseCard>
      <Grid columns="1fr 50px">
        <Heading>{task.name}</Heading>
      </Grid>
      <Box>
        <Text as="p" style={{ "white-space": "pre-wrap" }}>
          {task.description}
        </Text>
      </Box>
      <Flex gap="3" justify="end">
        <Resolve id={task.id} />
        <Delete id={task.id} />
        <Update id={task.id} />
      </Flex>
    </BaseCard>
  )
}
