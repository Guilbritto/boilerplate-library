import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState
} from 'react'
import { defaultTheme } from '../../styles/defaultTheme'

interface ThemeContextData {
    getCurrentTheme: () => any
}

interface CustomThemeProviderProps {
    children: ReactNode
    theme?: any
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const CustomThemeProvider = ({ children, theme }: CustomThemeProviderProps) => {
    const [currentTheme, setCurrentTheme] = useState<any>(defaultTheme)

    useEffect(() => {
        if (theme) {
            setCurrentTheme(theme)
        } else {
            setCurrentTheme(defaultTheme)
        }
    }, [])

    const getCurrentTheme = useCallback(() => currentTheme, [currentTheme])

    return (
        <ThemeContext.Provider value={{ getCurrentTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): any {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error(
            'useCustomTheme must be used within a CustomThemeProvider'
        )
    }

    return context.getCurrentTheme()
}

export { useTheme, CustomThemeProvider }
