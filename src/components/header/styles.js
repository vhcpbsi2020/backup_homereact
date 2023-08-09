import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  width: 100%;

  background: -webkit-linear-gradient(to left, #FD8F17, #FD1745);

  background: -o-linear-gradient(to left, #FD8F17, #FD1745);

  background: -moz-linear-gradient(to left,#FD8F17, #FD1745);
  
  background: linear-gradient(to left, #FD8F17, #FD1745);
  box-shadow: 0 0 30px 5px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;