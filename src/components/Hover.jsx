import React from "react";
import useHover from "../hooks/useHover";


function Hover() {
    const squareRef = React.useRef()

    const hover = useHover(squareRef)

    return <>
        <div ref={squareRef} style={{ width: 200, height: 200, backgroundColor: hover ? "green" : "red" }}></div>
    </>
}

export default Hover