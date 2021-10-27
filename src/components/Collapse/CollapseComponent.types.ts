import { ReactNode } from 'react'

export type CollapseProps = {
    children: ReactNode
    title: string
    widthSize?: number
    opened?: boolean
}

export type ContainerProps = {
    collapse: boolean
    widthSize?: number
}
