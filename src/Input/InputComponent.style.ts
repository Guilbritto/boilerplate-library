import styled, { css } from 'styled-components';

interface InputComponentStylesProps {
  isActive: boolean;
  variant: string;
  isEyeOn: boolean;
  error: boolean;
}

export const Container = styled.div<InputComponentStylesProps>`
  
  position: relative;
  width: auto;
  height: 48px;
  input {
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
    ${props => {
      if(props.isActive && props.error){
        return css`
        border-color: #E73A33;
        color: #E73A33;
        `
      }
      if(props.isActive && !props.error){
        return css`
          border-color:#2B52DD
        `
      }
      if (props.isEyeOn) {
        return css`
          -webkit-text-security: disc;
        `
      }
      if (props.isEyeOn && props.error) {
        return css`
          -webkit-text-security: disc;
          border-color: #E73A33;
        `
      }
      
      
    } };
  }
  
  label{
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
  }
  svg {
    position: absolute;
    right: -2.9rem;
    top: .9rem;
    cursor: pointer;
  }
  
`;

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