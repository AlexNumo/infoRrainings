import moment from 'moment/moment';
import { HandleVisitTraineeNO, HandleVisitTraineeYES } from '../VisitTraineeBTN/VisitTraineeBTN';
import {
  DayOfWeekWrapper,
  WrapperInfoTime,
  KindTrainee,
  Clients,
} from './SortingFirstRender.styled';

const SortingFirstRender = ({
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
  today,
  nextDay,
  nextDay1,
  }) => {
  const dateOfToday = moment().add(0, 'days').format('L');
  const dateOfNextDay = moment().add(1, 'days').format('L');
  const dateOfNextDay1 = moment().add(2, 'days').format('L');
  // console.log(clientsNextDay0900);
  return(
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
{/* ===========================ToDay======================================================================================== */}
      <div style={{ padding: '2px' }}>
        <DayOfWeekWrapper><span>{today}</span><br/><span>{dateOfToday}</span></DayOfWeekWrapper>
        <WrapperInfoTime>
          {clientsToday0800 ? <KindTrainee>{clientsToday0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday0800 ? clientsToday0800.map((item) => (
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
        <WrapperInfoTime>
          {clientsToday0900 ? <KindTrainee>{clientsToday0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday0900 ? clientsToday0900.map((item) => (
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
        <WrapperInfoTime>
          {clientsToday1000 ? <KindTrainee>{clientsToday1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1000 ? clientsToday1000.map((item) => (
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
        <WrapperInfoTime>
          {clientsToday1100 ? <KindTrainee>{clientsToday1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1100 ? clientsToday1100.map((item) => (
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
        <WrapperInfoTime>
          {clientsToday1200 ? <KindTrainee>{clientsToday1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1200 ? clientsToday1200.map((item) => (
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
        <WrapperInfoTime>
          {clientsToday1300 ? <KindTrainee>{clientsToday1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1300 ? clientsToday1300.map((item) => (
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
        <WrapperInfoTime>
          {clientsToday1400 ? <KindTrainee>{clientsToday1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1400 ? clientsToday1400.map((item) => (
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
        <WrapperInfoTime>
          {clientsToday1500 ? <KindTrainee>{clientsToday1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1500 ? clientsToday1500.map((item) => (
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
        <WrapperInfoTime>
          {clientsToday1600 ? <KindTrainee>{clientsToday1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1600 ? clientsToday1600.map((item) => (
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
        <WrapperInfoTime>
          {clientsToday1700 ? <KindTrainee>{clientsToday1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1700 ? clientsToday1700.map((item) => (
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
        <WrapperInfoTime>
          {clientsToday1800 ? <KindTrainee>{clientsToday1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1800 ? clientsToday1800.map((item) => (
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
        <WrapperInfoTime>
          {clientsToday1900 ? <KindTrainee>{clientsToday1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1900 ? clientsToday1900.map((item) => (
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
        <WrapperInfoTime>
          {clientsToday2000 ? <KindTrainee>{clientsToday2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday2000 ? clientsToday2000.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDay0800 ? <KindTrainee>{clientsNextDay0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay0800 ? clientsNextDay0800.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDay0900 ? <KindTrainee>{clientsNextDay0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay0900 ? clientsNextDay0900.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDay1000 ? <KindTrainee>{clientsNextDay1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1000 ? clientsNextDay1000.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDay1100 ? <KindTrainee>{clientsNextDay1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1100 ? clientsNextDay1100.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDay1200 ? <KindTrainee>{clientsNextDay1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1200 ? clientsNextDay1200.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDay1300 ? <KindTrainee>{clientsNextDay1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1300 ? clientsNextDay1300.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDay1400 ? <KindTrainee>{clientsNextDay1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1400 ? clientsNextDay1400.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDay1500 ? <KindTrainee>{clientsNextDay1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1500 ? clientsNextDay1500.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDay1600 ? <KindTrainee>{clientsNextDay1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1600 ? clientsNextDay1600.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDay1700 ? <KindTrainee>{clientsNextDay1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1700 ? clientsNextDay1700.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDay1800 ? <KindTrainee>{clientsNextDay1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1800 ? clientsNextDay1800.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDay1900 ? <KindTrainee>{clientsNextDay1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1900 ? clientsNextDay1900.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDay2000 ? <KindTrainee>{clientsNextDay2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay2000 ? clientsNextDay2000.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDayTwo0800 ? <KindTrainee>{clientsNextDayTwo0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo0800 ? clientsNextDayTwo0800.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDayTwo0900 ? <KindTrainee>{clientsNextDayTwo0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo0900 ? clientsNextDayTwo0900.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDayTwo1000 ? <KindTrainee>{clientsNextDayTwo1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1000 ? clientsNextDayTwo1000.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDayTwo1100 ? <KindTrainee>{clientsNextDayTwo1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1100 ? clientsNextDayTwo1100.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDayTwo1200 ? <KindTrainee>{clientsNextDayTwo1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1200 ? clientsNextDayTwo1200.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDayTwo1300 ? <KindTrainee>{clientsNextDayTwo1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1300 ? clientsNextDayTwo1300.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDayTwo1400 ? <KindTrainee>{clientsNextDayTwo1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1400 ? clientsNextDayTwo1400.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDayTwo1500 ? <KindTrainee>{clientsNextDayTwo1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1500 ? clientsNextDayTwo1500.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDayTwo1600 ? <KindTrainee>{clientsNextDayTwo1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1600 ? clientsNextDayTwo1600.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDayTwo1700 ? <KindTrainee>{clientsNextDayTwo1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1700 ? clientsNextDayTwo1700.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDayTwo1800 ? <KindTrainee>{clientsNextDayTwo1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1800 ? clientsNextDayTwo1800.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDayTwo1900 ? <KindTrainee>{clientsNextDayTwo1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1900 ? clientsNextDayTwo1900.map((item) => (
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
        <WrapperInfoTime>
          {clientsNextDayTwo2000 ? <KindTrainee>{clientsNextDayTwo2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo2000 ? clientsNextDayTwo2000.map((item) => (
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