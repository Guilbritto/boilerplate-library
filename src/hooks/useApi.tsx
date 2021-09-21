import { useEffect, useRef, useState } from 'react'
import { AxiosInstance, CancelTokenStatic } from 'axios'

interface useApiReturnType<D, E> {
    data: D | undefined
    error: E | undefined
}

interface useApiProps {
    url: string
    cancelationToken: CancelTokenStatic
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
    const { url, cancelationToken, api } = props

    //Create data and error useState to store the result of request,
    //and if has error
    const [data, setData] = useState<D | undefined>(undefined)
    const [error, setError] = useState<E | undefined>(undefined)

    //create source const to cancel an request
    const source = useRef(cancelationToken.source())

    useEffect(
        () => {
            //A async function to perform a request
            const loadData = async () => {
                try {
                    const { data: response } = await api.get<D>(url, {
                        cancelToken: source.current.token
                    })
                    //store the result of req
                    setData(response)
                } catch (error) {
                    const { response } = error
                    //store the error response or error
                    setError(response || error)
                }
            }

            //trigger loadData function
            loadData()

            //clean-up the useEffect and cancel the req if user destroy the component
            //that was waiting for the response
            return () => source.current.cancel('the user canceled the request')
        },
        //if url changes, perform an new req
        [url]
    )

    //return data and error
    return { data, error }
}

export { useApi }
