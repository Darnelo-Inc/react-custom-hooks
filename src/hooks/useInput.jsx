import React from "react";

function useInput(initVal) {
    const [value, setValue] = React.useState(initVal)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return { value, onChange }
}

export default useInput