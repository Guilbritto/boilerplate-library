import React from "react"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: 'default' | 'minus'
}


export type CheckboxStyleProps= {
    disabled?: boolean
    isChecked?: boolean
    mouseDown?: boolean
    mouseOver?: boolean
    mouseUp?: boolean
    icon?: 'default' | 'minus'
}
