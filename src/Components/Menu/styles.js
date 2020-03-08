import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  margin-left: 260px;
  background: #eee;
`;

export const WrapperMenu = styled.div`
  width: 97%;
  margin: 0 auto;
  height: 70px;
  /* background: blue; */
  display: flex;
`;

export const MenuRight = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 70px;
  border: 0px;
  /* background: yellow; */
  align-items: center;
  justify-content: flex-end;
  display: flex;

  button {
    width: 60px;
    height: 60px;
    background: inherit;
    outline: none;
    border: 0px;
    margin: 0 10px 0 0%;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #d6d6d6};
    }
    svg {
      /* &:hover {
        color: blue;
      } */
    }
  }
`;

export const MenuLeft = styled.div`
  width: 97%;
  margin: 0 auto;
  height: 70px;
  /* background: green; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  form {
    width: 100%;
    display: flex;
    align-items: center;

    input {
      padding: 15px 20px;
      width: 97%;
      height: 50px;
      border: 0;
      outline: none;
      border-radius: 4px;
      border-bottom: 2px solid #954cbf;
      margin-right: 20px;
    }
  }
`;
