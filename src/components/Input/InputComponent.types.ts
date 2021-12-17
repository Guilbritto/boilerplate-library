export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: InputError
    variant?: 'password' | 'text'
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
