import { defaultTheme } from '../styles/defaultTheme'

export const createTheme = (theme: typeof defaultTheme) => {
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
    } as typeof defaultTheme
}
