import React from "react"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}


export type CheckboxStyleProps= {
    disabled?: boolean
    isChecked?: boolean
}
