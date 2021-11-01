export type SwitchProps = {
    isChecked: boolean
    setIsChecked?: (isChecked: boolean) => void
    disabled?: boolean
}

export interface SwtichStyleProps {
    isActive: boolean
    disabled: boolean
    isMouseDown?: boolean
    isMouseUp?: boolean
}
