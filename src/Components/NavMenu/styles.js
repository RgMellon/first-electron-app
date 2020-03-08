import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  background: #5c37b8;
  /* opacity: 0.8; */
  width: 260px;
  border-top-right-radius: 1px;
  border-bottom-right-radius: 1px;
  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42),
    0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 87%;
  /* background: red; */
`;
