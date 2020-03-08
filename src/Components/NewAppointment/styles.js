import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* height: 200px; */
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  border-left: 10px solid #5c37b8;
  padding: 20px;

  h4 {
    font-size: 20px;
    color: #5c37b8;
    font-weight: 100;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 10px;
  width: 50%;
  border-radius: 10px;
  border: 1px solid #d6d6d6;
  margin-top: 20px;
  /* background: blue; */
`;

export const RightContent = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  padding: 10px;

  h4 {
    color: #8b8d95;
    font-size: 18px;
    font-weight: 400;
  }
  /* background: blue; */
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

export const Title = styled.p`
  color: #333;
  font-size: 16px;
  margin-top: 8px;
`;

export const LeftContent = styled.div`
  width: 40%;
  /* background: red; */
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;
    background: #fff;
    /* border-radius: 50%; */

    img {
      width: 100%;
      height: 80px;
      border-radius: 50%;
      border: 1px solid #d6d6d6;
      object-fit: cover;
    }
`;
