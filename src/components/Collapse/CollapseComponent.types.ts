import { ReactNode } from 'react'

export type CollapseProps = {
    children: ReactNode
    title: string
    quantity: number
    widthSize?: number
    opened?: boolean
}

export type ContainerChildrenProps = {
    collapse: boolean
    maxHeight: string
}

export type ContainerProps = {
    widthSize?: number
}
