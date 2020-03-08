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

export const Item = styled.div`
  li {
    border: 1px solid #fff;
    background: #fff;
    display: flex;
    justify-content: center;

    height: 150px;
    border-radius: 4px;
  }
`;

export const Left = styled.div`
  width: 40%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 118px;
    height: 150px;
    background: #fff;
    /* border-radius: 50%; */

    img {
      width: 100%;
      height: 120px;
      border-radius: 50%;
      border: 1px solid #d6d6d6;
      object-fit: cover;
    }
  }
`;

export const Right = styled.div`
  width: 60%;
  height: 150px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  padding: 10px;

  h4 {
    color: #8b8d95;
    font-size: 18px;
  }
  /* background: blue; */
`;

export const Title = styled.p`
  color: #333;
  font-size: 16px;
  margin-top: 8px;
`;

export const Owner = styled.div`
  display: flex;
  justify-content: space-around;
  background: #d6d6d6;
  padding: 6px;
  border-radius: 4px;

  margin-top: 20px;
  width: 60%;
`;
