import { FcCheckmark } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import { VisitBTN } from "./VisitTraineeBTN.styled";
import { clientAPI } from "service/axios.config";

const HandleVisitTraineeYES = ({ item }) => {
  const HandleVisitTraineeYesAPI = async (e) => {
    e.preventDefault(e);
    // console.log(item)
    const value = item._id;
    const send = { _id: value };
    const statusYES = { status: true };
    const onClickBTN = document.getElementById(`${value}`);
    await clientAPI.sendSeasonTicketVisitTrainee(send, statusYES).then(() => {
      onClickBTN.classList.add('visitTraineeYES')
      onClickBTN.classList.remove('visitTraineeNO')
  });
};
  return (
    <>
      <VisitBTN type="button" onClick={HandleVisitTraineeYesAPI}><FcCheckmark/></VisitBTN>
    </>
  )
};

const HandleVisitTraineeNO = ({ item }) => {
  // console.log(item)
  const HandleVisitTraineeNoAPI = async (e) => {
    e.preventDefault(e);
    const value = item._id;
    const send = { _id: value };
    const statusNO = { status: false };
    const onClickBTN = document.getElementById(`${value}`);
    await clientAPI.canceledTraining(send, statusNO).then(() => {
      onClickBTN.classList.remove('visitTraineeYES')
      onClickBTN.classList.add('visitTraineeNO')
  });;
}
  return (
    <>
      <VisitBTN type="button" onClick={HandleVisitTraineeNoAPI}><IoIosClose style={{color: 'red'}}/></VisitBTN>
    </>
  )
};

export {
  HandleVisitTraineeNO, HandleVisitTraineeYES
}