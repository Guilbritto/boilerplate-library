import styled, { css } from 'styled-components'

interface StyleProps {
    disabled: boolean
}

export const Wrapper = styled.label<StyleProps>`
    background: ${props =>
        props.disabled
            ? props.theme.colors.neutral.light['300']
            : props.theme.colors.blue.light};

    width: 34px;
    height: 14px;
    border-radius: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    span {
        margin-top: 0;
    }
`

export const Circle = styled.span<StyleProps>`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 0;

    background: ${props =>
        props.disabled
            ? props.theme.colors.neutral.light['500']
            : props.theme.colors.primary};

    cursor: pointer;
    box-shadow: 2px 2px 4px ${props => props.theme.colors.neutral.light['500']};
    transition: 0.25s;
`

export const Input = styled.input`
    height: 100%;
    width: 100%;
    opacity: 0;
    cursor: pointer;

    &:checked + span {
        left: 50%;
    }

    &:disabled {
        cursor: not-allowed;
    }

    &:disabled + span {
        cursor: not-allowed;
    }
`
