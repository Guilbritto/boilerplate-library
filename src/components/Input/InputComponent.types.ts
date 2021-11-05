export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    value?: string
    error?: InputError
    variant?: 'password' | 'text'
    customOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    marginTop?: string
    marginBottom?: string
    marginLeft?: string
    marginRight?: string
    inputSize?: 'large' | 'medium'
    disabled?: boolean
    mask?: 'date' | 'time'
}

export type InputError = {
    message?: string
    icon?: string
}
