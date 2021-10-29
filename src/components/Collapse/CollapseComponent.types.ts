import { ReactNode } from 'react'

export type CollapseProps = {
    children: ReactNode
    title: string
    widthSize?: number
    opened?: boolean
}

export type ContainerChildrenProps = {
    collapse: boolean
}

export type ContainerProps = {
    widthSize?: number
}
