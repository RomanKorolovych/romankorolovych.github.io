import React from "react"
import ReactDOM from "react-dom/client"

const App: React.FC = () => {
  return <div>Todo App, Baby!</div>
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as ReactDOM.Container // root is guaranteed to exist by design
)

root.render(<App />)
