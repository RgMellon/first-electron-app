import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  /* background: #fff; */
  height: 100vh;
  width: 80%;
  margin-left: 19%;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
    padding: 20px;

    li {
      background: #d6d6d6;
      display: flex;
      justify-content: center;

      height: 100px;
      border-radius: 4px;
    }
  }
`;

export const Content = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: center;

  header {
    padding-top: 40px;
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
      border: 1px solid #fff;
      border-radius: 50%;

      width: 30px;
      height: 30px;
      background: rgba(255, 255, 255, 0.1);
      justify-content: center;
      align-items: center;
    }

    strong {
      color: #5c37b8;
      font-size: 24px;
      margin: 0 15px;
    }
  }
`;
