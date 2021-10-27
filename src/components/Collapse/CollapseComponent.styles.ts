import styled from 'styled-components'
import { ContainerProps } from './CollapseComponent.types'

export const Container = styled.div<ContainerProps>`
    display: ${props => (props.collapse ? 'none' : 'block')};
    width: ${props => props.widthSize}%;
`

export const ContainerHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
