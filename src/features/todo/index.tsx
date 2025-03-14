import React from "react"
import { Flex, Text } from "@radix-ui/themes"

import * as Task from "@/components/task"
import * as Filter from "@/components/filter"
import * as Sorting from "@/components/sorting"

export const Todo = () => {
  return (
    <Flex direction="column">
      <Flex>
        <Task.Create />
      </Flex>
      <Flex>
        <Filter.Search />
        <Filter.Status />
      </Flex>
      <Flex>
        <Sorting.Type />
        <Sorting.Order />
      </Flex>
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
