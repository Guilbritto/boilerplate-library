import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string
        colors: {
            primary: string
            secondary: string
            neutral: {
                white: string
                light: {
                    300:string,
                    500: string
                }
                dark: string
                soft: string
                medium: string
            }
            suport: {
                success: string
                alert: string
                error: string
                successLight: string,
                alertLight: string,
                errorLight: string
            },
            blue: {
                light: string,
                medium: string,
                dark: string
            }
        }
        fontTokens:{
            [key: string]: FlattenSimpleInterpolation
        }
        borderRadius: string
        fontWeight: {
            light: number,
            regular: number,
            medium: number,
            bold: number,
            black: number
        },
    }
}
