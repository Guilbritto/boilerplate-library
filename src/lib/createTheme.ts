import { defaultTheme } from '../styles/defaultTheme'
import { Theme } from '../styles/types'

export const createTheme = <T>(theme: Theme & T) => {
    return {
        ...defaultTheme,
        colors: {
            ...defaultTheme.colors,
            ...theme.colors
        },
        borderRadius: theme.borderRadius || defaultTheme.borderRadius,
        fontTokens: {
            ...defaultTheme.fontTokens,
            ...theme.fontTokens
        },
        fontWeight: theme.fontWeight || defaultTheme.fontWeight,
        name: theme.name || defaultTheme.name
    }
}
