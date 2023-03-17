import { useRef, useCallback } from "react"

function useDebounce(cb, delay) {
    const timeRef = useRef(0)

    const debounce = useCallback((...props) => {
        if (timeRef.current) clearTimeout(timeRef.current)

        timeRef.current = setTimeout(() => {
            cb(...props)
        }, delay)
    }, [cb, delay])

    return debounce
}

export default useDebounce