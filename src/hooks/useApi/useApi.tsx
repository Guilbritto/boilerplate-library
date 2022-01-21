import { useEffect, useState } from 'react'
import { AxiosInstance } from 'axios'

interface useApiReturnType<D, E> {
    data: D | undefined
    error: E | undefined
    loadData: () => Promise<void>
}

interface useApiProps {
    url: string
    api: AxiosInstance
}

/**
 * a hook to call API's based on Axios
 * @param {<D,E>} GenericTypes type of Data, type of Error
 * @param {useApiProps}  useApiProps props to perform an request
 * @return {data, error} the returned data and if has error
 */
const useApi = <D, E = undefined>(
    props: useApiProps
): useApiReturnType<D, E> => {
    //destroy props
    const { url, api } = props

    //Create data and error useState to store the result of request,
    //and if has error
    const [data, setData] = useState<D | undefined>(undefined)
    const [error, setError] = useState<E | undefined>(undefined)

    //create source const to cancel an request
    //const source = useRef(cancelationToken.source())

    const loadData = async () => {
        try {
            const { data: response } = await api.get<D>(url)
            //store the result of req
            setData(response)
        } catch (error) {
            const { response } = error
            //store the error response or error
            setError(response || error)
        }
    }

    useEffect(
        () => {
            //trigger loadData function
            if (url) {
                loadData()
            }

            //clean-up the useEffect and cancel the req if user destroy the component
            //that was waiting for the response
            //return () => source.current.cancel('the user canceled the request')
        },
        //if url changes, perform an new req
        [url]
    )

    //return data and error
    return { data, error, loadData }
}

export { useApi }
