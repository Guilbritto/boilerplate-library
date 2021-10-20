export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon?: 'arrowRight'
    label: string
    iconSide?: 'left' | 'right'
    marginBottom?: string;
    marginTop?: string;
    marginLeft?: string;
    marginRight?: string;
    width?: string;
    loading?: boolean;
    buttonSize?: "large" | 'small';
    buttonType?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean
    type?: string
}
