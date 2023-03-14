import React from "react"
import useInput from "./hooks/useInput"

function App() {
  const username = useInput("")
  const password = useInput("")

  return (
    <div>
      <input type="text" placeholder="Username..." {...username}></input>
      <input type="password" placeholder="Password..." {...password}></input>

      <button
        onClick={() => {
          console.log({ Username: username.value, Password: password.value })
        }}
      >
        Submit
      </button>
    </div>
  )
}

export default App
