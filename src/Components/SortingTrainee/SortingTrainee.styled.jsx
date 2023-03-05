import styled from "styled-components";

const WrapperBTN = styled.p`
  position: sticky;
  top: 80px;
  height: auto;
  background-color: #ddd2c5;
  text-align: center;
  width: 35px;
`;

const WrapperInfoTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  border-radius: 3px;
  margin-top: 2px;
  margin-bottom: 2px;
  /* padding: 2px; */
  /* width: 90px; */
  height: 200px;
`;

// const NextBTNPosition = styled.div`
//   position: sticky;
//   top: 0px;
//   left: 10px;
//   /* width: 120px; */
//   display: flex;
//   justify-content: start;
//   align-items: flex-start;
// `;

// const NextBTNWrapper = styled.div`
//   position: absolute;
//   top: 0px;
//   left: 10px;
//   width: 120px;
// `;

const NextDaysBTN = styled.button`
  background-color: #434c46;
  border-radius: 8px;
  width: 100%;
  color: #ddcaca;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 400;
  font-size: 13px;
  padding-top: 7px;
  padding-bottom: 7px;
`

export {
  WrapperBTN,
  WrapperInfoTime,
  // NextBTNPosition,
  // NextBTNWrapper,
  NextDaysBTN
};