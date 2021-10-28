import { ReactNode } from 'react'

type StatCardVariation = 'primary' | 'secondary'

export type StatCardProps = {
    title: string
    subtitle: string
    variation?: StatCardVariation
    quantity: number
    total: number
    children?: ReactNode
}
