import styled, { css } from 'styled-components'
import { CheckboxStyleProps } from './CheckboxComponent.types'



export const Container = styled.div <CheckboxStyleProps>`
    box-sizing: border-box;
    height: 20px;
    width: 20px;
    border: 3px solid ${props => props.theme.colors.neutral.light[500]};
    border-radius: ${props => props.theme.borderRadius};
    margin: 1px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.isChecked && !props.disabled && css`
        border-color: ${props.theme.colors.primary};
    `}
    ${props => props.disabled && css`cursor: not-allowed;`}

        input {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            appearance: none;
            height: 100%;
            width: 100%;
            border-radius: 2px;
            margin:0;
            cursor: pointer;
            position: absolute;
            &:checked{
                background-color: ${props => props.theme.colors.primary};
            }
            &:disabled {
                background-color: ${props => props.theme.colors.neutral.light[500]};
                cursor: not-allowed;
            }
        }
        svg{
            position: absolute;
            width: 100%;
            fill: ${props => props.theme.colors.neutral.white};
            height: ${props => (props.icon === 'default' ? '10px' : '19px')};
        }
`


export const EffectArea = styled.div<CheckboxStyleProps>`
    box-sizing: border-box;
    height: 30px;
    width: 30px;
    border-radius:50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease-in-out;
    ${props => props.mouseDown && !props.disabled && css`
        background-color: ${props.theme.colors.blue.light};
        opacity: .8;
    ` }

`
