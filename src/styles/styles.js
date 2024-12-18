import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  height: 100vh;

  img {
    width: 30%;
    height: auto;
  }

  @media (max-width: 600px) {
    img {
      width: 80%;
    }
  }

  @media (max-width: 900px) {
    img {
      width: 60%;
    }
  }
`;



