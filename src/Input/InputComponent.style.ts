import styled, { css } from 'styled-components';

interface InputComponentStylesProps {
  isActive?: boolean;
  variant?: string;
  isEyeOn?: boolean;
  error?: boolean;
}

export const AlertMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  color: #E73A33;
  svg{
    margin-right: 5px;
  }

`

export const Container = styled.div<InputComponentStylesProps>`
  box-sizing: border-box;
  position: relative;
  width: auto;
  height: 48px;
`

export const Svg = styled.div`
  display: flex;
  svg{
    right: -2.9rem;
    top: .9rem;
    cursor: pointer;
  }
`

export const Label = styled.label<InputComponentStylesProps>`
  position: absolute;
  left: 1rem;
  top: 35%;
  padding: 0 .5rem;
  margin-left: -.5rem;
  color: #999EA7;
  cursor: text;
  transition: top 200ms ease-in,
  left 200ms ease-in,
  font-size 200ms ease-in;
  
  ${props => props.isActive && css`
    top: -.5rem;
    font-size: .8rem;
    left: .8rem;
    background-color: #FFF;
    color: #2B52DD;
  `}
  ${props => props.error && css` 
    color: #E73A33;
  `}
`

export const Input = styled.div<InputComponentStylesProps>`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: .8rem;
  padding-right: .8rem;
  border: 2px solid #004282;
  border-radius: 4px;
  color: #2B2C32;
  align-items: center;
  justify-content: center;
  input{
    font-size: inherit;
    font-family: inherit;
    width: 100%;
    height: 88%;
    outline: none;
    background: none;
    border-style: none;
    &::-ms-reveal,
    &::-ms-clear {
      display: none;
    }
    ${props => (props.isActive && props.error) && css`
      color: #E73A33;
    `}
  }
  
  
  
  
  ${props => (props.isActive && props.error) && css`
    border-color: #E73A33;
    color: #E73A33;
  `}
  ${props => (props.isActive && !props.error) && css`
    border-color:#2B52DD;
  `}
`