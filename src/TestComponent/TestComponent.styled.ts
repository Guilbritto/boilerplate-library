import styled from 'styled-components';

export const Container = styled.div`
  .test-component {
    background-color: white;
    border: 1px solid black;
    padding: 16px;
    width: 360px;
    text-align: center;
    
    .heading {
        font-size: 64px;
    }

    &.test-component-secondary {
        background-color: black;
        color: white;
    }
  }
`;
