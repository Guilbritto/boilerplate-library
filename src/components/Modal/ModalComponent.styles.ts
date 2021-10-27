import styled from 'styled-components'
import { ContainerModalProps } from './ModalComponent.types'

export const Container = styled.div<ContainerModalProps>`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
`

export const ModalContainer = styled.div`
    min-width: 376px;
    min-height: 303px;
    background: ${props => props.theme.colors.neutral.white};
    border-radius: ${props => props.theme.borderRadius};
    padding: 16px 22px;
`

export const ModalHeader = styled.div`
    display: flex;
    font-weight: ${props => props.theme.fontWeight.medium};
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        cursor: pointer;
    }
`
