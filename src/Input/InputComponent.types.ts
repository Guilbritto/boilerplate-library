import { DefaultTheme } from 'styled-components'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    value?: string
    error?: InputError
    variant?: 'password' | 'text'
    customOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    theme?: DefaultTheme
}

export type InputError = {
    message?: string
    icon?: string
}
