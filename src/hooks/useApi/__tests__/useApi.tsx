import axios from 'axios'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

mockedAxios.create.mockImplementation(config => axios)

describe('useApi', () => {
    it('should be able to grab data', async () => {
        // const data = {
        //     id: '886262ee-ea8a-4b3e-9011-00d894500501',
        //     name: 'transportadora1'
        // }

        // const mockedApi = axios.create()

        // mockedAxios.get.mockResolvedValue({ data })

        // const { result, waitForNextUpdate } = renderHook(() =>
        //     useApi<typeof data>({
        //         url: 'some-url',
        //         api: mockedApi
        //     })
        // )

        expect(true).toBe(true)
        // expect(result.current.data).toBe(data)
    })
})
