import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFF; 
  font-size: 20px;
  color: black;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
    color: #FD313B;
  }

  &:hover {

    transition: all 0.1s;
    
    background: linear-gradient(to left, #FD8F17, #FD1745);

    color: white;

    > svg {
      margin: 0 20px;
      color: white;
      transition: all 0.1s;
    }
    
  }

`;