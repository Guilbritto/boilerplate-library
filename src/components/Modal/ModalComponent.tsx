import { useTheme } from '../../hooks/ThemeContext'
import { Close } from '@svg/Close'
import React, { memo, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { Container, ModalContainer, ModalHeader } from './ModalComponent.styles'
import { ModalProps } from './ModalComponent.types'

const ModalDOM = ({
    children,
    renderQuery
}: {
    renderQuery: string
    children: React.ReactNode
}) => {
    if (typeof window !== 'undefined') {
        const modalRoot =
            document.querySelector('modal-root') ||
            document.createElement('div')
        modalRoot.setAttribute('id', 'modal-root')

        useEffect(() => {
            renderQuery
                ? document.querySelector(renderQuery)?.appendChild(modalRoot)
                : document.body.appendChild(modalRoot)

            return () => {
                renderQuery
                    ? document.querySelector(renderQuery).removeChild(modalRoot)
                    : document.body.removeChild(modalRoot)
            }
        }, [modalRoot])

        return ReactDOM.createPortal(children, modalRoot)
    }
    return null
}

const ModalComponent = ({
    children,
    title,
    isOpen = false,
    renderQuery,
    handleClose
}: ModalProps) => {
    const theme = useTheme()
    return (
        <ModalDOM renderQuery={renderQuery}>
            <Container theme={theme} isOpen={isOpen}>
                <ModalContainer theme={theme}>
                    <ModalHeader theme={theme}>
                        {title} <div onClick={handleClose}>{Close}</div>
                    </ModalHeader>
                    {children}
                </ModalContainer>
            </Container>
        </ModalDOM>
    )
}

export default memo(ModalComponent)
