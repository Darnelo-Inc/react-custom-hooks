import React from "react"

function useHover(ref) {
    const [hover, setHover] = React.useState(false)

    const on = () => setHover(true)
    const off = () => setHover(false)



    React.useEffect(() => {
        if (!ref.current) return;

        const node = ref.current

        node.addEventListener("mouseenter", on)
        node.addEventListener("mousemove", on)
        node.addEventListener("mouseleave", off)

        return (() => {
            node.removeEventListener("mouseenter", on)
            node.removeEventListener("mousemove", on)
            node.removeEventListener("mouseleave", off)
        })
    }, [])  // eslint-disable-line
    return hover
}

export default useHover

