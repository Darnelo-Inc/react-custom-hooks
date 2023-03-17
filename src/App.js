import { useState } from "react"
import useDebounce from "./hooks/useDebounce"

function App() {
  const [value, setValue] = useState("")
  const delay = 500

  const fetching = (query) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?query=${query}`)
      .then((res) => res.json())
      .then((json) => console.log(json))
  }

  const debounce = useDebounce(fetching, delay)

  const onChange = (e) => {
    setValue(e.target.value)
    debounce(e.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Type a query..."
      value={value}
      onChange={onChange}
    ></input>
  )
}

export default App
