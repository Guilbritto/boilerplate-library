import React from 'react'

export interface CheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: 'default' | 'minus'
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    isChecked: boolean

    setIsChecked: (isChecked: boolean) => void
}

export type CheckboxStyleProps = {
    disabled?: boolean
    isChecked?: boolean
    mouseDown?: boolean
    mouseOver?: boolean
    mouseUp?: boolean
    icon?: 'default' | 'minus'
}
