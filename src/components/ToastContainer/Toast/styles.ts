import styled, { css } from 'styled-components';
import {animated} from 'react-spring'
const ToastTypes = {
    success: css`
        background-color: ${props => props.theme.colors.suport.successLight};

    `,
    warning: css`
        background-color: ${props => props.theme.colors.suport.warningLight};

    `,
    error: css`
        background-color: ${props => props.theme.colors.suport.errorLight};

    `,
}

interface ContainerProps {
    toastType: 'info' | 'success' | 'warning' | 'error'
}

export const Container = styled(animated.div)<ContainerProps>`
    padding: 0 18px;
    position: relative;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    min-width: 327px;
    ${props => ToastTypes[props.toastType]};

    & + div {
        margin-top: 8px;
    }
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        > svg {
            margin-right: 10px;
        }
        p{
            ${props => props.theme.fontTokens['100']}
        }
    }

    button {
        color: red;
        border: none;
        background: none;
        cursor: pointer;
        outline: none;
        height: 13px;
        width: 13px;

        svg{
            height: 13px;
            width: 13px;
        }


    }
`
