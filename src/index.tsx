import React from "react"
import ReactDOM from "react-dom/client"
import "@radix-ui/themes/styles.css"

import { Theme, Container } from "@radix-ui/themes"
import { FiltersProvider } from "@/contexts/FiltersContext"
import { SortingProvider } from "@/contexts/SortingContext"
import { Todo } from "@/features/todo"

const App: React.FC = () => {
  return (
    <Theme>
      <FiltersProvider>
        <SortingProvider>
          <Container size="3">
            <Todo />
          </Container>
        </SortingProvider>
      </FiltersProvider>
    </Theme>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as ReactDOM.Container // root is guaranteed to exist by design
)

root.render(<App />)
