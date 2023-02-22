import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* width: 795px; */
  background-color: #ddd2c5;
`;

const WrapperStyle = styled.nav`
  position: sticky;
  top: 0;
  background-color: #ddd2c5;
  font-family: 'Times New Roman', Times, serif;
  font-size: 15px;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BTN = styled.button`
  width: 300px;
  margin: 10px 30px 30px 30px;
  padding: 10px 10px 10px 10px;
  background-color: #8babc7;
  border-radius: 22px;
`;

export {
  Wrapper,
  WrapperStyle,
  BTN
};