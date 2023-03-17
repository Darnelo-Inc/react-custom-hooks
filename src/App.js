import axios from "axios"
import useRequest from "./hooks/useRequest"

function App() {
  const fetching = () => axios.get("https://jsonplaceholder.typicode.com/posts")

  const [todos, isLoading, error] = useRequest(fetching)

  if (error) return <h1>{error.message}</h1>

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        todos.map((elem) => (
          <div key={elem.id}>
            {elem.id}. {elem.title}
          </div>
        ))
      )}
    </>
  )
}

export default App
