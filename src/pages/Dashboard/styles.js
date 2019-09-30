import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    strong {
      color: #333;
      font-size: 32px;
    }

    button {
      width: 172px;
      height: 42px;
      border: 0;
      border-radius: 4px;
      background: #46a23a;
      font-size: 16px;
      font-weight: bold;
      color: #fff;

      &:hover {
        background: ${darken(0.1, '#46A23A')};
      }
    }
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 280px);
  grid-auto-rows: 350px;
  margin-top: 30px;
`;

export const ProductList = styled.li`
  width: 250px;
  height: 300px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  &:hover {
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
  }

  img {
    height: 150px;
    width: 150px;
  }

  div {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  strong {
    color: #333;
    font-size: 15px;
    font-weight: bold;
  }

  span {
    margin-right: 15px;
    color: rgba(255, 255, 255, 0.1);
  }

  button {
    margin-top: 20px;
    width: 172px;
    height: 42px;
    border: 0;
    border-radius: 4px;
    background: #46a23a;
    font-size: 16px;
    font-weight: bold;
    color: #fff;

    &:hover {
      background: ${darken(0.1, '#46A23A')};
    }
  }
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    margin-top: 25px;
    color: #333;
    font-size: 18px;
  }
`;
