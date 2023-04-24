import moment from 'moment/moment';
import { HandleVisitTraineeNO, HandleVisitTraineeYES } from '../VisitTraineeBTN/VisitTraineeBTN';
import {
  DayOfWeekWrapper,
  WrapperInfoTime,
  KindTrainee,
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
  const dateOfToday = moment().add(0, 'days').format('L');
  const dateOfNextDay = moment().add(1, 'days').format('L');
  const dateOfNextDay1 = moment().add(2, 'days').format('L');
  
  // console.log(clientsNextDay1100);
  return(
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
{/* ===========================ToDay======================================================================================== */}
      <div style={{ padding: '2px' }}>
        <DayOfWeekWrapper><span>{today}</span><br/><span>{dateOfToday}</span></DayOfWeekWrapper>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday0800.length, clientsNextDay0800.length, clientsNextDayTwo0800.length, clientsNextDayThree0800.length,
            clientsNextDayFour0800.length, clientsNextDayFive0800.length, clientsNextDaySix0800.length
          )
        }}>
          {clientsToday0800.length > 0 ? <KindTrainee>{clientsToday0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday0800.length > 0 ? clientsToday0800.map((item) => (
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
          {clientsToday0900.length > 0 ? <KindTrainee>{clientsToday0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday0900.length > 0 ? clientsToday0900.map((item) => (
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
          {clientsToday1000.length > 0 ? <KindTrainee>{clientsToday1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1000.length > 0 ? clientsToday1000.map((item) => (
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
          {clientsToday1100.length > 0 ? <KindTrainee>{clientsToday1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1100.length > 0 ? clientsToday1100.map((item) => (
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
          {clientsToday1200.length > 0 ? <KindTrainee>{clientsToday1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1200.length > 0 ? clientsToday1200.map((item) => (
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
          {clientsToday1300.length > 0 ? <KindTrainee>{clientsToday1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1300.length > 0 ? clientsToday1300.map((item) => (
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
          {clientsToday1400.length > 0 ? <KindTrainee>{clientsToday1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1400.length > 0 ? clientsToday1400.map((item) => (
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
          {clientsToday1500.length > 0 ? <KindTrainee>{clientsToday1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1500.length > 0 ? clientsToday1500.map((item) => (
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
          {clientsToday1600.length > 0 ? <KindTrainee>{clientsToday1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1600.length > 0 ? clientsToday1600.map((item) => (
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
          {clientsToday1700.length > 0 ? <KindTrainee>{clientsToday1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1700.length > 0 ? clientsToday1700.map((item) => (
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
          {clientsToday1800.length > 0 ? <KindTrainee>{clientsToday1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1800.length > 0 ? clientsToday1800.map((item) => (
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
          {clientsToday1900.length > 0 ? <KindTrainee>{clientsToday1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1900.length > 0 ? clientsToday1900.map((item) => (
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
          {clientsToday2000.length > 0 ? <KindTrainee>{clientsToday2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday2000.length > 0 ? clientsToday2000.map((item) => (
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
{/* ===========================NextDay======================================================================================== */}
      <div style={{ padding: '2px' }}>
        <DayOfWeekWrapper><span>{nextDay}</span><br/><span>{dateOfNextDay}</span></DayOfWeekWrapper>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday0800.length, clientsNextDay0800.length, clientsNextDayTwo0800.length, clientsNextDayThree0800.length,
            clientsNextDayFour0800.length, clientsNextDayFive0800.length, clientsNextDaySix0800.length
          )
        }}>
          {clientsNextDay0800.length > 0 ? <KindTrainee>{clientsNextDay0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay0800.length > 0 ? clientsNextDay0800.map((item) => (
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
          {clientsNextDay0900.length > 0 ? <KindTrainee>{clientsNextDay0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay0900.length > 0 ? clientsNextDay0900.map((item) => (
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
          {clientsNextDay1000.length > 0 ? <KindTrainee>{clientsNextDay1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1000.length > 0 ? clientsNextDay1000.map((item) => (
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
          {clientsNextDay1100.length > 0 ? <KindTrainee>{clientsNextDay1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1100.length > 0 ? clientsNextDay1100.map((item) => (
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
          {clientsNextDay1200.length > 0 ? <KindTrainee>{clientsNextDay1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1200.length > 0 ? clientsNextDay1200.map((item) => (
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
          {clientsNextDay1300.length > 0 ? <KindTrainee>{clientsNextDay1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1300.length > 0 ? clientsNextDay1300.map((item) => (
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
          {clientsNextDay1400.length > 0 ? <KindTrainee>{clientsNextDay1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1400.length > 0 ? clientsNextDay1400.map((item) => (
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
          {clientsNextDay1500.length > 0 ? <KindTrainee>{clientsNextDay1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1500.length > 0 ? clientsNextDay1500.map((item) => (
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
          {clientsNextDay1600.length > 0 ? <KindTrainee>{clientsNextDay1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1600.length > 0 ? clientsNextDay1600.map((item) => (
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
          {clientsNextDay1700.length > 0 ? <KindTrainee>{clientsNextDay1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1700.length > 0 ? clientsNextDay1700.map((item) => (
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
          {clientsNextDay1800.length > 0 ? <KindTrainee>{clientsNextDay1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1800.length > 0 ? clientsNextDay1800.map((item) => (
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
          {clientsNextDay1900.length > 0 ? <KindTrainee>{clientsNextDay1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1900.length > 0 ? clientsNextDay1900.map((item) => (
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
          {clientsNextDay2000.length > 0 ? <KindTrainee>{clientsNextDay2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay2000.length > 0 ? clientsNextDay2000.map((item) => (
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
{/* ===========================NextDayTwo======================================================================================== */}
      <div style={{ padding: '2px' }}>
        <DayOfWeekWrapper><span>{nextDay1}</span><br/><span>{dateOfNextDay1}</span></DayOfWeekWrapper>
        <WrapperInfoTime  style={{
          height: calculateHeight(
            clientsToday0800.length, clientsNextDay0800.length, clientsNextDayTwo0800.length, clientsNextDayThree0800.length,
            clientsNextDayFour0800.length, clientsNextDayFive0800.length, clientsNextDaySix0800.length
          )
        }}>
          {clientsNextDayTwo0800.length > 0 ? <KindTrainee>{clientsNextDayTwo0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo0800.length > 0 ? clientsNextDayTwo0800.map((item) => (
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
          {clientsNextDayTwo0900.length > 0 ? <KindTrainee>{clientsNextDayTwo0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo0900.length > 0 ? clientsNextDayTwo0900.map((item) => (
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
          {clientsNextDayTwo1000.length > 0 ? <KindTrainee>{clientsNextDayTwo1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1000.length > 0 ? clientsNextDayTwo1000.map((item) => (
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
          {clientsNextDayTwo1100.length > 0 ? <KindTrainee>{clientsNextDayTwo1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1100.length > 0 ? clientsNextDayTwo1100.map((item) => (
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
          {clientsNextDayTwo1200.length > 0 ? <KindTrainee>{clientsNextDayTwo1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1200.length > 0 ? clientsNextDayTwo1200.map((item) => (
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
          {clientsNextDayTwo1300.length > 0 ? <KindTrainee>{clientsNextDayTwo1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1300.length > 0 ? clientsNextDayTwo1300.map((item) => (
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
          {clientsNextDayTwo1400.length > 0 ? <KindTrainee>{clientsNextDayTwo1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1400.length > 0 ? clientsNextDayTwo1400.map((item) => (
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
          {clientsNextDayTwo1500.length > 0 ? <KindTrainee>{clientsNextDayTwo1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1500.length > 0 ? clientsNextDayTwo1500.map((item) => (
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
          {clientsNextDayTwo1600.length > 0 ? <KindTrainee>{clientsNextDayTwo1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1600.length > 0 ? clientsNextDayTwo1600.map((item) => (
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
          {clientsNextDayTwo1700.length > 0 ? <KindTrainee>{clientsNextDayTwo1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1700.length > 0 ? clientsNextDayTwo1700.map((item) => (
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
          {clientsNextDayTwo1800.length > 0 ? <KindTrainee>{clientsNextDayTwo1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1800.length > 0 ? clientsNextDayTwo1800.map((item) => (
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
          {clientsNextDayTwo1900.length > 0 ? <KindTrainee>{clientsNextDayTwo1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1900.length > 0 ? clientsNextDayTwo1900.map((item) => (
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
          {clientsNextDayTwo2000.length > 0 ? <KindTrainee>{clientsNextDayTwo2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo2000.length > 0 ? clientsNextDayTwo2000.map((item) => (
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

export default SortingFirstRender;