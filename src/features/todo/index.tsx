import React from "react"
import { Flex, Text, Grid, Button } from "@radix-ui/themes"

import * as Task from "@/components/task"
import * as Filter from "@/components/filter"
import * as Sorting from "@/components/sorting"

export const Todo = () => {
  return (
    <Flex direction="column" my="3">
      <Grid>
        <Task.Create>
          <Button my="1">
            <Text size="5" weight="bold">
              Create Task
            </Text>
          </Button>
        </Task.Create>
      </Grid>
      <Grid columns="2fr 1fr" gap="3" my="4">
        <Filter.Search />
        <Filter.Status />
        <Sorting.Type />
        <Sorting.Order />
      </Grid>
      <Task.List>
        {({ tasks }) =>
          tasks.length > 0 ? (
            tasks.map((task) => <Task.Card task={task} />)
          ) : (
            <Text align="center" weight="bold" size="5">
              Nothing to do... Maybe have a tea?
            </Text>
          )
        }
      </Task.List>
    </Flex>
  )
}
