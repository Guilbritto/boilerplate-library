export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon?: 'arrowRight'
    label: string
    iconSide: 'left' | 'right'
    marginBottom?: string;
    marginTop?: string;
    marginLeft?: string;
    marginRight?: string;
    width?: string;
    loading?: boolean;
}
