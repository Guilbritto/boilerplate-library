import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        typography: {}
        colors: {
            main: string
            secondary: string
        }

        borderRadius: string
    }
}
