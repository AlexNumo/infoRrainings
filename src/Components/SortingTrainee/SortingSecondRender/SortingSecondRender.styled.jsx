import styled from "styled-components";

const DayOfWeekWrapper = styled.p`
  position: sticky;
  top: 100px;
  height: auto;
  background-color: #ddd2c5;
  text-align: center;
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
  padding: 2px;
  width: 90px;
  height: 200px;
`;

const KindTrainee = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 400;
  font-size: 12px;
`;

const Clients = styled.li`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 400;
  font-size: 10px;
  /* padding: 1px; */
  border: solid 1px;
  margin-bottom: 1px;
  border-radius: 5px;
`;

export {
  DayOfWeekWrapper,
  WrapperInfoTime,
  KindTrainee,
  Clients,
}