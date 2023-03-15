import React from "react"
import useInfPagination from "../hooks/useInfPagination"

function Posts() {
    const [posts, setPosts] = React.useState([])

    const [page, setPage] = React.useState(1)
    const limit = 50

    const fetching = (page, limit) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setPage(page => page + 1)
                setPosts([...posts, ...json])
            })
    }

    const ref = React.useRef()

    useInfPagination(() => fetching(page, limit), page <= 100 / limit, ref)


    return (
        <>
            {posts.map((elem) =>
                <div key={elem.id}>{elem.id}. {elem.title}</div>
            )}
            <div ref={ref} style={{ height: 3, background: "red" }}></div>
        </>
    )
}

export default Posts