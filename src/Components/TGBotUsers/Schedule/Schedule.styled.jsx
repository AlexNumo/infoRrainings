import styled from "styled-components";

const WrapperDay = styled.div`
  display: flex;
  /* width: 697px; */
  @media (prefers-color-scheme: light){
    color: black !important;
  }
  @media (prefers-color-scheme: dark){
    color: #ffffff !important;
  }
`;

const WrapperBTN = styled.div`
  /* width: 80px; */
`;

const BTN = styled.button`
  font-family: 'Times New Roman', Times, serif;
  font-size: 8px;
  font-weight: 400;
  width: 60px;
  height: 30px;
  margin: 1px;
  padding: 1px;
  color: black;
`;

const Days = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-size: 8px;
  font-weight: 400;
  width: 60px;
  text-align: center;
  /* color: inherit; */
`;

const Time = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-size: 8px;
  font-weight: 400;
  width: 20px;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 50px; */
  /* color: inherit; */
`;

const WaitingWrapper = styled.div`
  display: flex;
  /* margin-top: auto; */
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export {
  WrapperDay,
  WrapperBTN,
  Days,
  BTN,
  Time,
  WaitingWrapper
}