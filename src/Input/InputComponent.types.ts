
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
    value?: string;
    error?: InputError
    variant?: "password" | "text";
}

export type InputError ={
    message?: string;
    icon?: string;
}


