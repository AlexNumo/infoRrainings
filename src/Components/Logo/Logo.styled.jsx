import styled from "styled-components";

const LogoPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
`;

const LogoStudio = styled.p`
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  font-size: 35px;
  color: #986e70;
`;

const LogoSandra = styled.p`
  font-family: 'Philosopher', sans-serif;
  /* font-family: 'Signika Negative', sans-serif; */
  font-weight: 300;
  font-size: 18px;
  margin-top: -8px;
  color: #986e70;

`;

export {
  LogoPosition,
  LogoStudio,
  LogoSandra
}