import styled from 'styled-components';

export const Container = styled.div`
  color: black;
  background-color: white;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 340px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  > svg {
    position: fixed;
    color: #FD2F3B;
    width: 50px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;

export const Teste = styled.div`
  text-align: center;
  aling-itens: center;
  justify-content: center;
  border-bottom: 4px solid transparent;
  border-image: linear-gradient(to left, #FD8F17, #FD1745 );
  border-image-slice: 2;
  width:90%;
  color: #FD2F3B;
  margin: 15px;
  border-radius: 5px;
  

`;