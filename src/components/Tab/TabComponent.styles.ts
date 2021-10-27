import styled, { css } from 'styled-components'

interface TabPanelStyleProps {
    active: boolean
}

interface TabCellProps {
    isActive: boolean
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    border-top: 1px solid ${props => props.theme.colors.neutral.soft};
    padding: 16px;
    width: 100%;
    height: 100%;
`

export const TabTitles = styled.div`
    display: flex;
    align-items: center;
`
export const TabCell = styled.div<TabCellProps>`
    padding: 5px;
    margin-bottom: -1px;
    color: ${props => props.theme.colors.neutral.soft};
    cursor: pointer;
    ${props => props.theme.fontTokens[200]}
    ${props =>
        props.isActive &&
        css`
            border-bottom: 1px solid ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.primary};
            font-weight: 500;
        `}
`
export const TabPanelContainer = styled.div<TabPanelStyleProps>`
    ${props =>
        !props.active &&
        css`
            display: none;
        `}
`
