import moment from 'moment/moment';
import { HandleVisitTraineeNO, HandleVisitTraineeYES } from '../VisitTraineeBTN/VisitTraineeBTN';
import {
  DayOfWeekWrapper,
  WrapperInfoTime,
  KindTrainee,
  Clients,
} from './SortingSecondRender.styled';

const SortingSecondRender = ({
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
  nextDay2,
  nextDay3,
  nextDay4,
  nextDay5 }) => {
  const dateOfNextDay2 = moment().add(3, 'days').format('L');
  const dateOfNextDay3 = moment().add(4, 'days').format('L');
  const dateOfNextDay4 = moment().add(5, 'days').format('L');
  const dateOfNextDay5 = moment().add(6, 'days').format('L');
  // console.log(clientsToday1400);
  return(
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
{/* ===========================NextDayThree=========================================== */}
      <div style={{ padding: '2px' }}>
        <DayOfWeekWrapper><span>{nextDay2}</span><br/><span>{dateOfNextDay2}</span></DayOfWeekWrapper>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday0800.length, clientsNextDay0800.length, clientsNextDayTwo0800.length, clientsNextDayThree0800.length,
            clientsNextDayFour0800.length, clientsNextDayFive0800.length, clientsNextDaySix0800.length
          )
        }}>
          {clientsNextDayThree0800 ? <KindTrainee>{clientsNextDayThree0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree0800 ? clientsNextDayThree0800.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday0900.length, clientsNextDay0900.length, clientsNextDayTwo0900.length, clientsNextDayThree0900.length,
            clientsNextDayFour0900.length, clientsNextDayFive0900.length, clientsNextDaySix0900.length
          )
        }}>
          {clientsNextDayThree0900 ? <KindTrainee>{clientsNextDayThree0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree0900 ? clientsNextDayThree0900.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1000.length, clientsNextDay1000.length, clientsNextDayTwo1000.length, clientsNextDayThree1000.length,
            clientsNextDayFour1000.length, clientsNextDayFive1000.length, clientsNextDaySix1000.length
          )
        }}>
          {clientsNextDayThree1000 ? <KindTrainee>{clientsNextDayThree1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1000 ? clientsNextDayThree1000.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1100.length, clientsNextDay1100.length, clientsNextDayTwo1100.length, clientsNextDayThree1100.length,
            clientsNextDayFour1100.length, clientsNextDayFive1100.length, clientsNextDaySix1100.length
          )
        }}>
          {clientsNextDayThree1100 ? <KindTrainee>{clientsNextDayThree1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1100 ? clientsNextDayThree1100.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1200.length, clientsNextDay1200.length, clientsNextDayTwo1200.length, clientsNextDayThree1200.length,
            clientsNextDayFour1200.length, clientsNextDayFive1200.length, clientsNextDaySix1200.length
          )
        }}>
          {clientsNextDayThree1200 ? <KindTrainee>{clientsNextDayThree1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1200 ? clientsNextDayThree1200.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1300.length, clientsNextDay1300.length, clientsNextDayTwo1300.length, clientsNextDayThree1300.length,
            clientsNextDayFour1300.length, clientsNextDayFive1300.length, clientsNextDaySix1300.length
          )
        }}>
          {clientsNextDayThree1300 ? <KindTrainee>{clientsNextDayThree1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1300 ? clientsNextDayThree1300.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1400.length, clientsNextDay1400.length, clientsNextDayTwo1400.length, clientsNextDayThree1400.length,
            clientsNextDayFour1400.length, clientsNextDayFive1400.length, clientsNextDaySix1400.length
          )
        }}>
          {clientsNextDayThree1400 ? <KindTrainee>{clientsNextDayThree1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1400 ? clientsNextDayThree1400.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1500.length, clientsNextDay1500.length, clientsNextDayTwo1500.length, clientsNextDayThree1500.length,
            clientsNextDayFour1500.length, clientsNextDayFive1500.length, clientsNextDaySix1500.length
          )
        }}>
          {clientsNextDayThree1500 ? <KindTrainee>{clientsNextDayThree1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1500 ? clientsNextDayThree1500.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1600.length, clientsNextDay1600.length, clientsNextDayTwo1600.length, clientsNextDayThree1600.length,
            clientsNextDayFour1600.length, clientsNextDayFive1600.length, clientsNextDaySix1600.length
          )
        }}>
          {clientsNextDayThree1600 ? <KindTrainee>{clientsNextDayThree1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1600 ? clientsNextDayThree1600.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1700.length, clientsNextDay1700.length, clientsNextDayTwo1700.length, clientsNextDayThree1700.length,
            clientsNextDayFour1700.length, clientsNextDayFive1700.length, clientsNextDaySix1700.length
          )
        }}>
          {clientsNextDayThree1700 ? <KindTrainee>{clientsNextDayThree1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1700 ? clientsNextDayThree1700.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1800.length, clientsNextDay1800.length, clientsNextDayTwo1800.length, clientsNextDayThree1800.length,
            clientsNextDayFour1800.length, clientsNextDayFive1800.length, clientsNextDaySix1800.length
          )
        }}>
          {clientsNextDayThree1800 ? <KindTrainee>{clientsNextDayThree1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1800 ? clientsNextDayThree1800.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1900.length, clientsNextDay1900.length, clientsNextDayTwo1900.length, clientsNextDayThree1900.length,
            clientsNextDayFour1900.length, clientsNextDayFive1900.length, clientsNextDaySix1900.length
          )
        }}>
          {clientsNextDayThree1900 ? <KindTrainee>{clientsNextDayThree1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1900 ? clientsNextDayThree1900.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
  height: calculateHeight(
    clientsToday2000.length, clientsNextDay2000.length, clientsNextDayTwo2000.length, clientsNextDayThree2000.length,
    clientsNextDayFour2000.length, clientsNextDayFive2000.length, clientsNextDaySix2000.length
  )
}}>
          {clientsNextDayThree2000 ? <KindTrainee>{clientsNextDayThree2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree2000 ? clientsNextDayThree2000.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
      </div>
{/* ===========================NextDayFour======================================================================================== */}
      <div style={{ padding: '2px' }}>
        <DayOfWeekWrapper><span>{nextDay3}</span><br/><span>{dateOfNextDay3}</span></DayOfWeekWrapper>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday0800.length, clientsNextDay0800.length, clientsNextDayTwo0800.length, clientsNextDayThree0800.length,
            clientsNextDayFour0800.length, clientsNextDayFive0800.length, clientsNextDaySix0800.length
          )
        }}>
          {clientsNextDayFour0800 ? <KindTrainee>{clientsNextDayFour0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour0800 ? clientsNextDayFour0800.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday0900.length, clientsNextDay0900.length, clientsNextDayTwo0900.length, clientsNextDayThree0900.length,
            clientsNextDayFour0900.length, clientsNextDayFive0900.length, clientsNextDaySix0900.length
          )
        }}>
          {clientsNextDayFour0900 ? <KindTrainee>{clientsNextDayFour0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour0900 ? clientsNextDayFour0900.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1000.length, clientsNextDay1000.length, clientsNextDayTwo1000.length, clientsNextDayThree1000.length,
            clientsNextDayFour1000.length, clientsNextDayFive1000.length, clientsNextDaySix1000.length
          )
        }}>
          {clientsNextDayFour1000 ? <KindTrainee>{clientsNextDayFour1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1000 ? clientsNextDayFour1000.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1100.length, clientsNextDay1100.length, clientsNextDayTwo1100.length, clientsNextDayThree1100.length,
            clientsNextDayFour1100.length, clientsNextDayFive1100.length, clientsNextDaySix1100.length
          )
        }}>
          {clientsNextDayFour1100 ? <KindTrainee>{clientsNextDayFour1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1100 ? clientsNextDayFour1100.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1200.length, clientsNextDay1200.length, clientsNextDayTwo1200.length, clientsNextDayThree1200.length,
            clientsNextDayFour1200.length, clientsNextDayFive1200.length, clientsNextDaySix1200.length
          )
        }}>
          {clientsNextDayFour1200 ? <KindTrainee>{clientsNextDayFour1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1200 ? clientsNextDayFour1200.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1300.length, clientsNextDay1300.length, clientsNextDayTwo1300.length, clientsNextDayThree1300.length,
            clientsNextDayFour1300.length, clientsNextDayFive1300.length, clientsNextDaySix1300.length
          )
        }}>
          {clientsNextDayFour1300 ? <KindTrainee>{clientsNextDayFour1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1300 ? clientsNextDayFour1300.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1400.length, clientsNextDay1400.length, clientsNextDayTwo1400.length, clientsNextDayThree1400.length,
            clientsNextDayFour1400.length, clientsNextDayFive1400.length, clientsNextDaySix1400.length
          )
        }}>
          {clientsNextDayFour1400 ? <KindTrainee>{clientsNextDayFour1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1400 ? clientsNextDayFour1400.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1500.length, clientsNextDay1500.length, clientsNextDayTwo1500.length, clientsNextDayThree1500.length,
            clientsNextDayFour1500.length, clientsNextDayFive1500.length, clientsNextDaySix1500.length
          )
        }}>
          {clientsNextDayFour1500 ? <KindTrainee>{clientsNextDayFour1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1500 ? clientsNextDayFour1500.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1600.length, clientsNextDay1600.length, clientsNextDayTwo1600.length, clientsNextDayThree1600.length,
            clientsNextDayFour1600.length, clientsNextDayFive1600.length, clientsNextDaySix1600.length
          )
        }}>
          {clientsNextDayFour1600 ? <KindTrainee>{clientsNextDayFour1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1600 ? clientsNextDayFour1600.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1700.length, clientsNextDay1700.length, clientsNextDayTwo1700.length, clientsNextDayThree1700.length,
            clientsNextDayFour1700.length, clientsNextDayFive1700.length, clientsNextDaySix1700.length
          )
        }}>
          {clientsNextDayFour1700 ? <KindTrainee>{clientsNextDayFour1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1700 ? clientsNextDayFour1700.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1800.length, clientsNextDay1800.length, clientsNextDayTwo1800.length, clientsNextDayThree1800.length,
            clientsNextDayFour1800.length, clientsNextDayFive1800.length, clientsNextDaySix1800.length
          )
        }}>
          {clientsNextDayFour1800 ? <KindTrainee>{clientsNextDayFour1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1800 ? clientsNextDayFour1800.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1900.length, clientsNextDay1900.length, clientsNextDayTwo1900.length, clientsNextDayThree1900.length,
            clientsNextDayFour1900.length, clientsNextDayFive1900.length, clientsNextDaySix1900.length
          )
        }}>
          {clientsNextDayFour1900 ? <KindTrainee>{clientsNextDayFour1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1900 ? clientsNextDayFour1900.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
  height: calculateHeight(
    clientsToday2000.length, clientsNextDay2000.length, clientsNextDayTwo2000.length, clientsNextDayThree2000.length,
    clientsNextDayFour2000.length, clientsNextDayFive2000.length, clientsNextDaySix2000.length
  )
}}>
          {clientsNextDayFour2000 ? <KindTrainee>{clientsNextDayFour2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour2000 ? clientsNextDayFour2000.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
      </div>
{/* ===========================NextDayFive======================================================================================== */}
      <div style={{ padding: '2px' }}>
        <DayOfWeekWrapper><span>{nextDay4}</span><br/><span>{dateOfNextDay4}</span></DayOfWeekWrapper>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday0800.length, clientsNextDay0800.length, clientsNextDayTwo0800.length, clientsNextDayThree0800.length,
            clientsNextDayFour0800.length, clientsNextDayFive0800.length, clientsNextDaySix0800.length
          )
        }}>
          {clientsNextDayFive0800 ? <KindTrainee>{clientsNextDayFive0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive0800 ? clientsNextDayFive0800.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday0900.length, clientsNextDay0900.length, clientsNextDayTwo0900.length, clientsNextDayThree0900.length,
            clientsNextDayFour0900.length, clientsNextDayFive0900.length, clientsNextDaySix0900.length
          )
        }}>
          {clientsNextDayFive0900 ? <KindTrainee>{clientsNextDayFive0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive0900 ? clientsNextDayFive0900.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1000.length, clientsNextDay1000.length, clientsNextDayTwo1000.length, clientsNextDayThree1000.length,
            clientsNextDayFour1000.length, clientsNextDayFive1000.length, clientsNextDaySix1000.length
          )
        }}>
          {clientsNextDayFive1000 ? <KindTrainee>{clientsNextDayFive1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1000 ? clientsNextDayFive1000.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1100.length, clientsNextDay1100.length, clientsNextDayTwo1100.length, clientsNextDayThree1100.length,
            clientsNextDayFour1100.length, clientsNextDayFive1100.length, clientsNextDaySix1100.length
          )
        }}>
          {clientsNextDayFive1100 ? <KindTrainee>{clientsNextDayFive1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1100 ? clientsNextDayFive1100.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1200.length, clientsNextDay1200.length, clientsNextDayTwo1200.length, clientsNextDayThree1200.length,
            clientsNextDayFour1200.length, clientsNextDayFive1200.length, clientsNextDaySix1200.length
          )
        }}>
          {clientsNextDayFive1200 ? <KindTrainee>{clientsNextDayFive1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1200 ? clientsNextDayFive1200.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1300.length, clientsNextDay1300.length, clientsNextDayTwo1300.length, clientsNextDayThree1300.length,
            clientsNextDayFour1300.length, clientsNextDayFive1300.length, clientsNextDaySix1300.length
          )
        }}>
          {clientsNextDayFive1300 ? <KindTrainee>{clientsNextDayFive1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1300 ? clientsNextDayFive1300.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1400.length, clientsNextDay1400.length, clientsNextDayTwo1400.length, clientsNextDayThree1400.length,
            clientsNextDayFour1400.length, clientsNextDayFive1400.length, clientsNextDaySix1400.length
          )
        }}>
          {clientsNextDayFive1400 ? <KindTrainee>{clientsNextDayFive1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1400 ? clientsNextDayFive1400.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1500.length, clientsNextDay1500.length, clientsNextDayTwo1500.length, clientsNextDayThree1500.length,
            clientsNextDayFour1500.length, clientsNextDayFive1500.length, clientsNextDaySix1500.length
          )
        }}>
          {clientsNextDayFive1500 ? <KindTrainee>{clientsNextDayFive1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1500 ? clientsNextDayFive1500.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1600.length, clientsNextDay1600.length, clientsNextDayTwo1600.length, clientsNextDayThree1600.length,
            clientsNextDayFour1600.length, clientsNextDayFive1600.length, clientsNextDaySix1600.length
          )
        }}>
          {clientsNextDayFive1600 ? <KindTrainee>{clientsNextDayFive1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1600 ? clientsNextDayFive1600.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1700.length, clientsNextDay1700.length, clientsNextDayTwo1700.length, clientsNextDayThree1700.length,
            clientsNextDayFour1700.length, clientsNextDayFive1700.length, clientsNextDaySix1700.length
          )
        }}>
          {clientsNextDayFive1700 ? <KindTrainee>{clientsNextDayFive1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1700 ? clientsNextDayFive1700.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1800.length, clientsNextDay1800.length, clientsNextDayTwo1800.length, clientsNextDayThree1800.length,
            clientsNextDayFour1800.length, clientsNextDayFive1800.length, clientsNextDaySix1800.length
          )
        }}>
          {clientsNextDayFive1800 ? <KindTrainee>{clientsNextDayFive1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1800 ? clientsNextDayFive1800.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1900.length, clientsNextDay1900.length, clientsNextDayTwo1900.length, clientsNextDayThree1900.length,
            clientsNextDayFour1900.length, clientsNextDayFive1900.length, clientsNextDaySix1900.length
          )
        }}>
          {clientsNextDayFive1900 ? <KindTrainee>{clientsNextDayFive1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1900 ? clientsNextDayFive1900.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
  height: calculateHeight(
    clientsToday2000.length, clientsNextDay2000.length, clientsNextDayTwo2000.length, clientsNextDayThree2000.length,
    clientsNextDayFour2000.length, clientsNextDayFive2000.length, clientsNextDaySix2000.length
  )
}}>
          {clientsNextDayFive2000 ? <KindTrainee>{clientsNextDayFive2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive2000 ? clientsNextDayFive2000.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
      </div>
      {/* ===========================NextDaySix======================================================================================== */}
      <div style={{ padding: '2px' }}>
        <DayOfWeekWrapper><span>{nextDay5}</span><br/><span>{dateOfNextDay5}</span></DayOfWeekWrapper>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday0800.length, clientsNextDay0800.length, clientsNextDayTwo0800.length, clientsNextDayThree0800.length,
            clientsNextDayFour0800.length, clientsNextDayFive0800.length, clientsNextDaySix0800.length
          )
        }}>
          {clientsNextDaySix0800 ? <KindTrainee>{clientsNextDaySix0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix0800 ? clientsNextDaySix0800.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday0900.length, clientsNextDay0900.length, clientsNextDayTwo0900.length, clientsNextDayThree0900.length,
            clientsNextDayFour0900.length, clientsNextDayFive0900.length, clientsNextDaySix0900.length
          )
        }}>
          {clientsNextDaySix0900 ? <KindTrainee>{clientsNextDaySix0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix0900 ? clientsNextDaySix0900.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1000.length, clientsNextDay1000.length, clientsNextDayTwo1000.length, clientsNextDayThree1000.length,
            clientsNextDayFour1000.length, clientsNextDayFive1000.length, clientsNextDaySix1000.length
          )
        }}>
          {clientsNextDaySix1000 ? <KindTrainee>{clientsNextDaySix1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1000 ? clientsNextDaySix1000.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1100.length, clientsNextDay1100.length, clientsNextDayTwo1100.length, clientsNextDayThree1100.length,
            clientsNextDayFour1100.length, clientsNextDayFive1100.length, clientsNextDaySix1100.length
          )
        }}>
          {clientsNextDaySix1100 ? <KindTrainee>{clientsNextDaySix1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1100 ? clientsNextDaySix1100.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1200.length, clientsNextDay1200.length, clientsNextDayTwo1200.length, clientsNextDayThree1200.length,
            clientsNextDayFour1200.length, clientsNextDayFive1200.length, clientsNextDaySix1200.length
          )
        }}>
          {clientsNextDaySix1200 ? <KindTrainee>{clientsNextDaySix1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1200 ? clientsNextDaySix1200.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1300.length, clientsNextDay1300.length, clientsNextDayTwo1300.length, clientsNextDayThree1300.length,
            clientsNextDayFour1300.length, clientsNextDayFive1300.length, clientsNextDaySix1300.length
          )
        }}>
          {clientsNextDaySix1300 ? <KindTrainee>{clientsNextDaySix1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1300 ? clientsNextDaySix1300.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1400.length, clientsNextDay1400.length, clientsNextDayTwo1400.length, clientsNextDayThree1400.length,
            clientsNextDayFour1400.length, clientsNextDayFive1400.length, clientsNextDaySix1400.length
          )
        }}>
          {clientsNextDaySix1400 ? <KindTrainee>{clientsNextDaySix1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1400 ? clientsNextDaySix1400.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1500.length, clientsNextDay1500.length, clientsNextDayTwo1500.length, clientsNextDayThree1500.length,
            clientsNextDayFour1500.length, clientsNextDayFive1500.length, clientsNextDaySix1500.length
          )
        }}>
          {clientsNextDaySix1500 ? <KindTrainee>{clientsNextDaySix1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1500 ? clientsNextDaySix1500.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1600.length, clientsNextDay1600.length, clientsNextDayTwo1600.length, clientsNextDayThree1600.length,
            clientsNextDayFour1600.length, clientsNextDayFive1600.length, clientsNextDaySix1600.length
          )
        }}>
          {clientsNextDaySix1600 ? <KindTrainee>{clientsNextDaySix1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1600 ? clientsNextDaySix1600.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1700.length, clientsNextDay1700.length, clientsNextDayTwo1700.length, clientsNextDayThree1700.length,
            clientsNextDayFour1700.length, clientsNextDayFive1700.length, clientsNextDaySix1700.length
          )
        }}>
          {clientsNextDaySix1700 ? <KindTrainee>{clientsNextDaySix1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1700 ? clientsNextDaySix1700.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1800.length, clientsNextDay1800.length, clientsNextDayTwo1800.length, clientsNextDayThree1800.length,
            clientsNextDayFour1800.length, clientsNextDayFive1800.length, clientsNextDaySix1800.length
          )
        }}>
          {clientsNextDaySix1800 ? <KindTrainee>{clientsNextDaySix1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1800 ? clientsNextDaySix1800.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday1900.length, clientsNextDay1900.length, clientsNextDayTwo1900.length, clientsNextDayThree1900.length,
            clientsNextDayFour1900.length, clientsNextDayFive1900.length, clientsNextDaySix1900.length
          )
        }}>
          {clientsNextDaySix1900 ? <KindTrainee>{clientsNextDaySix1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1900 ? clientsNextDaySix1900.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
        <WrapperInfoTime  style={{
  height: calculateHeight(
    clientsToday2000.length, clientsNextDay2000.length, clientsNextDayTwo2000.length, clientsNextDayThree2000.length,
    clientsNextDayFour2000.length, clientsNextDayFive2000.length, clientsNextDaySix2000.length
  )
}}>
          {clientsNextDaySix2000 ? <KindTrainee>{clientsNextDaySix2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix2000 ? clientsNextDaySix2000.map((item) => (
              <Clients key={item._id}>
                {item.visitTrainee ?
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className='visitTraineeYES'>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>
                  :
                  <>
                    <HandleVisitTraineeYES item={item} />
                    <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id} className={item.canceledTraining ? 'visitTraineeNO' : ''}>
                      {item.name}
                    </a>
                    <HandleVisitTraineeNO item={item} />
                  </>}
              </Clients>
            )) : <p>-</p>}
          </ol>
        </WrapperInfoTime>
      </div>
    </div>
  )
};

export default SortingSecondRender;