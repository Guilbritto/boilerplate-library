import 'styled-components'

declare global {
    interface Crypto {
        randomUUID: () => string
    }
}
