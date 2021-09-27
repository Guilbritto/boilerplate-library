export type ModalProps = {
    children: React.ReactNode
    title: string
    isOpen: boolean
    renderQuery?: string
    handleClose: () => void
}
export interface ContainerModalProps {
    isOpen: boolean
}
