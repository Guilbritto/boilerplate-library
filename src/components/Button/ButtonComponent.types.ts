export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon?: 'arrowRight'
    label: string
    iconSide: 'left' | 'right'
}
