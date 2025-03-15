import React from "react"
import { formatDate } from "@/lib/formatDate"

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
  Flex
} from "@radix-ui/themes"

export interface TaskCardProps {
  task: Task
}

export const Card: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <BaseCard>
      <Grid columns="1fr 75px">
        <Heading size="5">{task.name}</Heading>
        <Text color="gray">{formatDate(task.creationDate)}</Text>
      </Grid>
      <Box>
        <Text as="p" style={{ "white-space": "pre-wrap" }}>
          {task.description}
        </Text>
      </Box>
      <Flex mt="3" gap="3" justify="end">
        <Resolve id={task.id} />
        <Delete id={task.id} />
        <Update id={task.id} />
      </Flex>
    </BaseCard>
  )
}
