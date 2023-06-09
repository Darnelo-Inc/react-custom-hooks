import React from "react"

function useInfPagination(cb, canLoad, ref, page) {
    const obsRef = React.useRef()

    React.useEffect(() => {
        obsRef.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && canLoad)
                cb()
        })

        obsRef.current.observe(ref.current)

        return () => {
            obsRef.current.unobserve(ref.current) // eslint-disable-line
        }
    }, [page]) // eslint-disable-line

    return
}

export default useInfPagination