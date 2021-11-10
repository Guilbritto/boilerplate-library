import React from "react";

export type SwitchProps = {
    isChecked: boolean
    setIsChecked?: (isChecked: boolean) => void
    disabled?: boolean
    onClick?: (element: React.MouseEvent<HTMLInputElement>) => void
}

export interface SwtichStyleProps {
    isActive: boolean
    disabled: boolean
    isMouseDown?: boolean
    isMouseUp?: boolean
}
