
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
    value?: string;
    variant?: "password" | "text";
}


