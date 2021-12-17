import { ChangeEventHandler } from 'react'

export type SwitchProps = {
    disabled?: boolean
    checked?: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
}
