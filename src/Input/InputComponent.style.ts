import styled, { css } from 'styled-components';

interface InputComponentStylesProps {
  isActive: boolean;
  variant: string;
  isEyeOn: boolean;
}

export const Container = styled.div<InputComponentStylesProps>`
  
  position: relative;
  width: auto;
  height: 48px;
  input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-left: .8rem;
    padding-right: 2.8rem;
    border: 2px solid #004282;
    border-radius: 4px;
    font-size: inherit;
    font-family: inherit;
    color: #2B2C32;
    outline: none;
    background: none;
    ${props => props.isEyeOn && css`
      -webkit-text-security: disc;
    `}
    ${props => props.isActive && css`
      border-color:#2B52DD
    `}
  }
  label{
    position: absolute;
    left: 1rem;
    top: 35%;
    padding: 0 .5rem;
    margin-left: -.5rem;
    color: #004282;
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
  }
  svg {
    position: absolute;
    right: -2.9rem;
    top: .9rem;
    cursor: pointer;
  }
  
`;
