import moment from 'moment/moment';
import { HandleVisitTraineeNO, HandleVisitTraineeYES } from '../VisitTraineeBTN/VisitTraineeBTN';
import { BsTelegram } from "react-icons/bs";
// import { useState } from 'react';

import {
  DayOfWeekWrapper,
  WrapperInfoTime,
  KindTrainee,
  // ShowUsersBTN,
  Clients,
} from './SortingFirstRender.styled';

const SortingFirstRender = ({
  calculateHeight,
  URLInsta,
  clientsToday0800,
  clientsToday0900,
  clientsToday1000,
  clientsToday1100,
  clientsToday1200,
  clientsToday1300,
  clientsToday1400,
  clientsToday1500,
  clientsToday1600,
  clientsToday1700,
  clientsToday1800,
  clientsToday1900,
  clientsToday2000,
  clientsNextDay0800,
  clientsNextDay0900,
  clientsNextDay1000,
  clientsNextDay1100,
  clientsNextDay1200,
  clientsNextDay1300,
  clientsNextDay1400,
  clientsNextDay1500,
  clientsNextDay1600,
  clientsNextDay1700,
  clientsNextDay1800,
  clientsNextDay1900,
  clientsNextDay2000,
  clientsNextDayTwo0800,
  clientsNextDayTwo0900,
  clientsNextDayTwo1000,
  clientsNextDayTwo1100,
  clientsNextDayTwo1200,
  clientsNextDayTwo1300,
  clientsNextDayTwo1400,
  clientsNextDayTwo1500,
  clientsNextDayTwo1600,
  clientsNextDayTwo1700,
  clientsNextDayTwo1800,
  clientsNextDayTwo1900,
  clientsNextDayTwo2000,
  clientsNextDayThree0800,
  clientsNextDayThree0900,
  clientsNextDayThree1000,
  clientsNextDayThree1100,
  clientsNextDayThree1200,
  clientsNextDayThree1300,
  clientsNextDayThree1400,
  clientsNextDayThree1500,
  clientsNextDayThree1600,
  clientsNextDayThree1700,
  clientsNextDayThree1800,
  clientsNextDayThree1900,
  clientsNextDayThree2000,
  clientsNextDayFour0800,
  clientsNextDayFour0900,
  clientsNextDayFour1000,
  clientsNextDayFour1100,
  clientsNextDayFour1200,
  clientsNextDayFour1300,
  clientsNextDayFour1400,
  clientsNextDayFour1500,
  clientsNextDayFour1600,
  clientsNextDayFour1700,
  clientsNextDayFour1800,
  clientsNextDayFour1900,
  clientsNextDayFour2000,
  clientsNextDayFive0800,
  clientsNextDayFive0900,
  clientsNextDayFive1000,
  clientsNextDayFive1100,
  clientsNextDayFive1200,
  clientsNextDayFive1300,
  clientsNextDayFive1400,
  clientsNextDayFive1500,
  clientsNextDayFive1600,
  clientsNextDayFive1700,
  clientsNextDayFive1800,
  clientsNextDayFive1900,
  clientsNextDayFive2000,
  clientsNextDaySix0800,
  clientsNextDaySix0900,
  clientsNextDaySix1000,
  clientsNextDaySix1100,
  clientsNextDaySix1200,
  clientsNextDaySix1300,
  clientsNextDaySix1400,
  clientsNextDaySix1500,
  clientsNextDaySix1600,
  clientsNextDaySix1700,
  clientsNextDaySix1800,
  clientsNextDaySix1900,
  clientsNextDaySix2000,
  today,
  nextDay,
  nextDay1,
  }) => {
  // const [showContent, setShowContent] = useState(false);
  const dateOfToday = moment().add(0, 'days').format('DD.MM.YYYY');
  const dateOfNextDay = moment().add(1, 'days').format('DD.MM.YYYY');
  const dateOfNextDay1 = moment().add(2, 'days').format('DD.MM.YYYY');
  
  // console.log(clientsNextDay1100);

  // const handleClick = () => {
  //   setShowContent(true);
  // };
  // console.log("BAD")

  const VisitTrainings = ({ item }) => {
    // console.log(item)
    return (
      <>
        {item.visitTrainee ?
          <>
            <HandleVisitTraineeYES item={item} />
            <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
              {item.name}
            </a>
            {item.isTrainingReminderSent ? <BsTelegram size={8} style={{ marginLeft: '4px', color: 'green' }} /> :
              <BsTelegram size={8} style={{ marginLeft: '4px', color: 'red' }} />}
            <HandleVisitTraineeNO item={item} />
          </>
          :
          <>
            <HandleVisitTraineeYES item={item} />
            <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
              {item.name}
            </a>
            {item.isTrainingReminderSent ? <BsTelegram size={8} style={{ marginLeft: '4px', color: 'green' }} /> :
              <BsTelegram size={8} style={{ marginLeft: '4px', color: 'red' }} />}
            <HandleVisitTraineeNO item={item} />
          </>}
      </>
    )
  }

const ThreeDays = ({ usersToday, usersNextDay, usersNextDayTwo, usersNextDayThree, usersNextDayFour, usersNextDayFive, usersNextDaySix }) => {
  return (
    <>
      <WrapperInfoTime style={{
        height: calculateHeight(
          usersToday.length, usersNextDay.length, usersNextDayTwo.length, usersNextDayThree.length,
          usersNextDayFour.length, usersNextDayFive.length, usersNextDaySix.length
        )
      }}>
        {/* {!showContent && <button onClick={handleClick}>Show Content</button>} */}
        {/* {!showContent && usersToday.length > 0 ? <ShowUsersBTN onClick={handleClick}>
          <KindTrainee>{usersToday[0].kind_trainee} <span style={{ color: '#23923f' }}>({usersToday.length})</span></KindTrainee></ShowUsersBTN> : null}
        {showContent && (
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {usersToday.length > 0 ? usersToday.map((item) => (
              <Clients key={item._id} style={{ backgroundColor: '#cac0b5' }}>
                <VisitTrainings item={item} />
              </Clients>
            )) : <p>-</p>}
          </ol>
        )} */}
        {usersToday.length > 0 ? <KindTrainee>{usersToday[0].kind_trainee} <span style={{ color: '#23923f', fontSize: '12px' }}>({usersToday.length})</span></KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {usersToday.length > 0 ? usersToday.map((item) => (
              <Clients key={item._id} style={{ backgroundColor: '#cac0b5' }}>
                <VisitTrainings item={item} />
              </Clients>
            )) : <p>-</p>}
          </ol>
      </WrapperInfoTime>
    </>
    );
  };

  return(
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
{/* ===========================ToDay======================================================================================== */}
      <div style={{ padding: '2px' }}>
        <DayOfWeekWrapper><span>{today}</span><br/><span>{dateOfToday}</span></DayOfWeekWrapper>
        <ThreeDays
          usersToday={clientsToday0800}
          usersNextDay={clientsNextDay0800}
          usersNextDayTwo={clientsNextDayTwo0800}
          usersNextDayThree={clientsNextDayThree0800}
          usersNextDayFour={clientsNextDayFour0800}
          usersNextDayFive={clientsNextDayFive0800}
          usersNextDaySix={clientsNextDaySix0800}
        />
        <ThreeDays
          usersToday={clientsToday0900}
          usersNextDay={clientsNextDay0900}
          usersNextDayTwo={clientsNextDayTwo0900}
          usersNextDayThree={clientsNextDayThree0900}
          usersNextDayFour={clientsNextDayFour0900}
          usersNextDayFive={clientsNextDayFive0900}
          usersNextDaySix={clientsNextDaySix0900}
        />
        <ThreeDays
          usersToday={clientsToday1000}
          usersNextDay={clientsNextDay1000}
          usersNextDayTwo={clientsNextDayTwo1000}
          usersNextDayThree={clientsNextDayThree1000}
          usersNextDayFour={clientsNextDayFour1000}
          usersNextDayFive={clientsNextDayFive1000}
          usersNextDaySix={clientsNextDaySix1000}
        />
        <ThreeDays
          usersToday={clientsToday1100}
          usersNextDay={clientsNextDay1100}
          usersNextDayTwo={clientsNextDayTwo1100}
          usersNextDayThree={clientsNextDayThree1100}
          usersNextDayFour={clientsNextDayFour1100}
          usersNextDayFive={clientsNextDayFive1100}
          usersNextDaySix={clientsNextDaySix1100}
        />
        <ThreeDays
          usersToday={clientsToday1200}
          usersNextDay={clientsNextDay1200}
          usersNextDayTwo={clientsNextDayTwo1200}
          usersNextDayThree={clientsNextDayThree1200}
          usersNextDayFour={clientsNextDayFour1200}
          usersNextDayFive={clientsNextDayFive1200}
          usersNextDaySix={clientsNextDaySix1200}
        />
        <ThreeDays
          usersToday={clientsToday1300}
          usersNextDay={clientsNextDay1300}
          usersNextDayTwo={clientsNextDayTwo1300}
          usersNextDayThree={clientsNextDayThree1300}
          usersNextDayFour={clientsNextDayFour1300}
          usersNextDayFive={clientsNextDayFive1300}
          usersNextDaySix={clientsNextDaySix1300}
        />
        <ThreeDays
          usersToday={clientsToday1400}
          usersNextDay={clientsNextDay1400}
          usersNextDayTwo={clientsNextDayTwo1400}
          usersNextDayThree={clientsNextDayThree1400}
          usersNextDayFour={clientsNextDayFour1400}
          usersNextDayFive={clientsNextDayFive1400}
          usersNextDaySix={clientsNextDaySix1400}
        />
        <ThreeDays
          usersToday={clientsToday1500}
          usersNextDay={clientsNextDay1500}
          usersNextDayTwo={clientsNextDayTwo1500}
          usersNextDayThree={clientsNextDayThree1500}
          usersNextDayFour={clientsNextDayFour1500}
          usersNextDayFive={clientsNextDayFive1500}
          usersNextDaySix={clientsNextDaySix1500}
        />
        <ThreeDays
          usersToday={clientsToday1600}
          usersNextDay={clientsNextDay1600}
          usersNextDayTwo={clientsNextDayTwo1600}
          usersNextDayThree={clientsNextDayThree1600}
          usersNextDayFour={clientsNextDayFour1600}
          usersNextDayFive={clientsNextDayFive1600}
          usersNextDaySix={clientsNextDaySix1600}
        />
        <ThreeDays
          usersToday={clientsToday1700}
          usersNextDay={clientsNextDay1700}
          usersNextDayTwo={clientsNextDayTwo1700}
          usersNextDayThree={clientsNextDayThree1700}
          usersNextDayFour={clientsNextDayFour1700}
          usersNextDayFive={clientsNextDayFive1700}
          usersNextDaySix={clientsNextDaySix1700}
        />
        <ThreeDays
          usersToday={clientsToday1800}
          usersNextDay={clientsNextDay1800}
          usersNextDayTwo={clientsNextDayTwo1800}
          usersNextDayThree={clientsNextDayThree1800}
          usersNextDayFour={clientsNextDayFour1800}
          usersNextDayFive={clientsNextDayFive1800}
          usersNextDaySix={clientsNextDaySix1800}
        />
        <ThreeDays
          usersToday={clientsToday1900}
          usersNextDay={clientsNextDay1900}
          usersNextDayTwo={clientsNextDayTwo1900}
          usersNextDayThree={clientsNextDayThree1900}
          usersNextDayFour={clientsNextDayFour1900}
          usersNextDayFive={clientsNextDayFive1900}
          usersNextDaySix={clientsNextDaySix1900}
        />
        <ThreeDays
          usersToday={clientsToday2000}
          usersNextDay={clientsNextDay2000}
          usersNextDayTwo={clientsNextDayTwo2000}
          usersNextDayThree={clientsNextDayThree2000}
          usersNextDayFour={clientsNextDayFour2000}
          usersNextDayFive={clientsNextDayFive2000}
          usersNextDaySix={clientsNextDaySix2000}
        />
      </div>
{/* ===========================NextDay======================================================================================== */}
      <div style={{ padding: '2px' }}>
        <DayOfWeekWrapper><span>{nextDay}</span><br/><span>{dateOfNextDay}</span></DayOfWeekWrapper>
        <ThreeDays
          usersToday={clientsNextDay0800}
          usersNextDay={clientsToday0800}
          usersNextDayTwo={clientsNextDayTwo0800}
          usersNextDayThree={clientsNextDayThree0800}
          usersNextDayFour={clientsNextDayFour0800}
          usersNextDayFive={clientsNextDayFive0800}
          usersNextDaySix={clientsNextDaySix0800}
        />
        <ThreeDays
          usersToday={clientsNextDay0900}
          usersNextDay={clientsToday0900}
          usersNextDayTwo={clientsNextDayTwo0900}
          usersNextDayThree={clientsNextDayThree0900}
          usersNextDayFour={clientsNextDayFour0900}
          usersNextDayFive={clientsNextDayFive0900}
          usersNextDaySix={clientsNextDaySix0900}
        />
        <ThreeDays
          usersToday={clientsNextDay1000}
          usersNextDay={clientsToday1000}
          usersNextDayTwo={clientsNextDayTwo1000}
          usersNextDayThree={clientsNextDayThree1000}
          usersNextDayFour={clientsNextDayFour1000}
          usersNextDayFive={clientsNextDayFive1000}
          usersNextDaySix={clientsNextDaySix1000}
        />
        <ThreeDays
          usersToday={clientsNextDay1100}
          usersNextDay={clientsToday1100}
          usersNextDayTwo={clientsNextDayTwo1100}
          usersNextDayThree={clientsNextDayThree1100}
          usersNextDayFour={clientsNextDayFour1100}
          usersNextDayFive={clientsNextDayFive1100}
          usersNextDaySix={clientsNextDaySix1100}
        />
        <ThreeDays
          usersToday={clientsNextDay1200}
          usersNextDay={clientsToday1200}
          usersNextDayTwo={clientsNextDayTwo1200}
          usersNextDayThree={clientsNextDayThree1200}
          usersNextDayFour={clientsNextDayFour1200}
          usersNextDayFive={clientsNextDayFive1200}
          usersNextDaySix={clientsNextDaySix1200}
        />
        <ThreeDays
          usersToday={clientsNextDay1300}
          usersNextDay={clientsToday1300}
          usersNextDayTwo={clientsNextDayTwo1300}
          usersNextDayThree={clientsNextDayThree1300}
          usersNextDayFour={clientsNextDayFour1300}
          usersNextDayFive={clientsNextDayFive1300}
          usersNextDaySix={clientsNextDaySix1300}
        />
        <ThreeDays
          usersToday={clientsNextDay1400}
          usersNextDay={clientsToday1400}
          usersNextDayTwo={clientsNextDayTwo1400}
          usersNextDayThree={clientsNextDayThree1400}
          usersNextDayFour={clientsNextDayFour1400}
          usersNextDayFive={clientsNextDayFive1400}
          usersNextDaySix={clientsNextDaySix1400}
        />
        <ThreeDays
          usersToday={clientsNextDay1500}
          usersNextDay={clientsToday1500}
          usersNextDayTwo={clientsNextDayTwo1500}
          usersNextDayThree={clientsNextDayThree1500}
          usersNextDayFour={clientsNextDayFour1500}
          usersNextDayFive={clientsNextDayFive1500}
          usersNextDaySix={clientsNextDaySix1500}
        />
        <ThreeDays
          usersToday={clientsNextDay1600}
          usersNextDay={clientsToday1600}
          usersNextDayTwo={clientsNextDayTwo1600}
          usersNextDayThree={clientsNextDayThree1600}
          usersNextDayFour={clientsNextDayFour1600}
          usersNextDayFive={clientsNextDayFive1600}
          usersNextDaySix={clientsNextDaySix1600}
        />
        <ThreeDays
          usersToday={clientsNextDay1700}
          usersNextDay={clientsToday1700}
          usersNextDayTwo={clientsNextDayTwo1700}
          usersNextDayThree={clientsNextDayThree1700}
          usersNextDayFour={clientsNextDayFour1700}
          usersNextDayFive={clientsNextDayFive1700}
          usersNextDaySix={clientsNextDaySix1700}
        />
        <ThreeDays
          usersToday={clientsNextDay1800}
          usersNextDay={clientsToday1800}
          usersNextDayTwo={clientsNextDayTwo1800}
          usersNextDayThree={clientsNextDayThree1800}
          usersNextDayFour={clientsNextDayFour1800}
          usersNextDayFive={clientsNextDayFive1800}
          usersNextDaySix={clientsNextDaySix1800}
        />
        <ThreeDays
          usersToday={clientsNextDay1900}
          usersNextDay={clientsToday1900}
          usersNextDayTwo={clientsNextDayTwo1900}
          usersNextDayThree={clientsNextDayThree1900}
          usersNextDayFour={clientsNextDayFour1900}
          usersNextDayFive={clientsNextDayFive1900}
          usersNextDaySix={clientsNextDaySix1900}
        />
        <ThreeDays
          usersToday={clientsNextDay2000}
          usersNextDay={clientsToday2000}
          usersNextDayTwo={clientsNextDayTwo2000}
          usersNextDayThree={clientsNextDayThree2000}
          usersNextDayFour={clientsNextDayFour2000}
          usersNextDayFive={clientsNextDayFive2000}
          usersNextDaySix={clientsNextDaySix2000}
        />
      </div>
{/* ===========================NextDayTwo======================================================================================== */}
      <div style={{ padding: '2px' }}>
        <DayOfWeekWrapper><span>{nextDay1}</span><br/><span>{dateOfNextDay1}</span></DayOfWeekWrapper>
        <ThreeDays
          usersToday={clientsNextDayTwo0800}
          usersNextDay={clientsToday0800}
          usersNextDayTwo={clientsNextDay0800}
          usersNextDayThree={clientsNextDayThree0800}
          usersNextDayFour={clientsNextDayFour0800}
          usersNextDayFive={clientsNextDayFive0800}
          usersNextDaySix={clientsNextDaySix0800}
        />
        <ThreeDays
          usersToday={clientsNextDayTwo0900}
          usersNextDay={clientsToday0900}
          usersNextDayTwo={clientsNextDay0900}
          usersNextDayThree={clientsNextDayThree0900}
          usersNextDayFour={clientsNextDayFour0900}
          usersNextDayFive={clientsNextDayFive0900}
          usersNextDaySix={clientsNextDaySix0900}
        />
        <ThreeDays
          usersToday={clientsNextDayTwo1000}
          usersNextDay={clientsToday1000}
          usersNextDayTwo={clientsNextDay1000}
          usersNextDayThree={clientsNextDayThree1000}
          usersNextDayFour={clientsNextDayFour1000}
          usersNextDayFive={clientsNextDayFive1000}
          usersNextDaySix={clientsNextDaySix1000}
        />
        <ThreeDays
          usersToday={clientsNextDayTwo1100}
          usersNextDay={clientsToday1100}
          usersNextDayTwo={clientsNextDay1100}
          usersNextDayThree={clientsNextDayThree1100}
          usersNextDayFour={clientsNextDayFour1100}
          usersNextDayFive={clientsNextDayFive1100}
          usersNextDaySix={clientsNextDaySix1100}
        />
        <ThreeDays
          usersToday={clientsNextDayTwo1200}
          usersNextDay={clientsToday1200}
          usersNextDayTwo={clientsNextDay1200}
          usersNextDayThree={clientsNextDayThree1200}
          usersNextDayFour={clientsNextDayFour1200}
          usersNextDayFive={clientsNextDayFive1200}
          usersNextDaySix={clientsNextDaySix1200}
        />
        <ThreeDays
          usersToday={clientsNextDayTwo1300}
          usersNextDay={clientsToday1300}
          usersNextDayTwo={clientsNextDay1300}
          usersNextDayThree={clientsNextDayThree1300}
          usersNextDayFour={clientsNextDayFour1300}
          usersNextDayFive={clientsNextDayFive1300}
          usersNextDaySix={clientsNextDaySix1300}
        />
        <ThreeDays
          usersToday={clientsNextDayTwo1400}
          usersNextDay={clientsToday1400}
          usersNextDayTwo={clientsNextDay1400}
          usersNextDayThree={clientsNextDayThree1400}
          usersNextDayFour={clientsNextDayFour1400}
          usersNextDayFive={clientsNextDayFive1400}
          usersNextDaySix={clientsNextDaySix1400}
        />
        <ThreeDays
          usersToday={clientsNextDayTwo1500}
          usersNextDay={clientsToday1500}
          usersNextDayTwo={clientsNextDay1500}
          usersNextDayThree={clientsNextDayThree1500}
          usersNextDayFour={clientsNextDayFour1500}
          usersNextDayFive={clientsNextDayFive1500}
          usersNextDaySix={clientsNextDaySix1500}
        />
        <ThreeDays
          usersToday={clientsNextDayTwo1600}
          usersNextDay={clientsToday1600}
          usersNextDayTwo={clientsNextDay1600}
          usersNextDayThree={clientsNextDayThree1600}
          usersNextDayFour={clientsNextDayFour1600}
          usersNextDayFive={clientsNextDayFive1600}
          usersNextDaySix={clientsNextDaySix1600}
        />
        <ThreeDays
          usersToday={clientsNextDayTwo1700}
          usersNextDay={clientsToday1700}
          usersNextDayTwo={clientsNextDay1700}
          usersNextDayThree={clientsNextDayThree1700}
          usersNextDayFour={clientsNextDayFour1700}
          usersNextDayFive={clientsNextDayFive1700}
          usersNextDaySix={clientsNextDaySix1700}
        />
        <ThreeDays
          usersToday={clientsNextDayTwo1800}
          usersNextDay={clientsToday1800}
          usersNextDayTwo={clientsNextDay1800}
          usersNextDayThree={clientsNextDayThree1800}
          usersNextDayFour={clientsNextDayFour1800}
          usersNextDayFive={clientsNextDayFive1800}
          usersNextDaySix={clientsNextDaySix1800}
        />
        <ThreeDays
          usersToday={clientsNextDayTwo1900}
          usersNextDay={clientsToday1900}
          usersNextDayTwo={clientsNextDay1900}
          usersNextDayThree={clientsNextDayThree1900}
          usersNextDayFour={clientsNextDayFour1900}
          usersNextDayFive={clientsNextDayFive1900}
          usersNextDaySix={clientsNextDaySix1900}
        />
        <ThreeDays
          usersToday={clientsNextDayTwo2000}
          usersNextDay={clientsToday2000}
          usersNextDayTwo={clientsNextDay2000}
          usersNextDayThree={clientsNextDayThree2000}
          usersNextDayFour={clientsNextDayFour2000}
          usersNextDayFive={clientsNextDayFive2000}
          usersNextDaySix={clientsNextDaySix2000}
        />
      </div>
    </div>
  )
};

export default SortingFirstRender;