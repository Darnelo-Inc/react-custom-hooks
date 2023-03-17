import { useState, useEffect } from 'react'

function useRequest(fetching) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        setIsLoading(true)
        fetching()
            .then(res => setData(res.data))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false))
    }, [])


    return [data, isLoading, error]
}

export default useRequest