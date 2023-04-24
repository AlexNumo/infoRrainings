import { useState, useEffect } from 'react';
import { clientAPI } from 'service/axios.config';
import moment from 'moment/moment';
import SortingFirstRender from './SortingFirstRender/SortingFirstRender';
import SortingSecondRender from './SortingSecondRender/SortingSecondRender';
import {
  WrapperBTN,
  WrapperInfoTime,
  // NextBTNPosition,
  // NextBTNWrapper,
  NextDaysBTN
} from './SortingTrainee.styled';

const SortingTrainee = () => {
  const [dataAllClients, setDataAllClients] = useState('');
  const [clientsToday0800, setClientsToday0800] = useState('');
  const [clientsToday0900, setClientsToday0900] = useState('');
  const [clientsToday1000, setClientsToday1000] = useState('');
  const [clientsToday1100, setClientsToday1100] = useState('');
  const [clientsToday1200, setClientsToday1200] = useState('');
  const [clientsToday1300, setClientsToday1300] = useState('');
  const [clientsToday1400, setClientsToday1400] = useState('');
  const [clientsToday1500, setClientsToday1500] = useState('');
  const [clientsToday1600, setClientsToday1600] = useState('');
  const [clientsToday1700, setClientsToday1700] = useState('');
  const [clientsToday1800, setClientsToday1800] = useState('');
  const [clientsToday1900, setClientsToday1900] = useState('');
  const [clientsToday2000, setClientsToday2000] = useState('');
  const [clientsNextDay0800, setClientsNextDay0800] = useState('');
  const [clientsNextDay0900, setClientsNextDay0900] = useState('');
  const [clientsNextDay1000, setClientsNextDay1000] = useState('');
  const [clientsNextDay1100, setClientsNextDay1100] = useState('');
  const [clientsNextDay1200, setClientsNextDay1200] = useState('');
  const [clientsNextDay1300, setClientsNextDay1300] = useState('');
  const [clientsNextDay1400, setClientsNextDay1400] = useState('');
  const [clientsNextDay1500, setClientsNextDay1500] = useState('');
  const [clientsNextDay1600, setClientsNextDay1600] = useState('');
  const [clientsNextDay1700, setClientsNextDay1700] = useState('');
  const [clientsNextDay1800, setClientsNextDay1800] = useState('');
  const [clientsNextDay1900, setClientsNextDay1900] = useState('');
  const [clientsNextDay2000, setClientsNextDay2000] = useState('');
  const [clientsNextDayTwo0800, setClientsNextDayTwo0800] = useState('');
  const [clientsNextDayTwo0900, setClientsNextDayTwo0900] = useState('');
  const [clientsNextDayTwo1000, setClientsNextDayTwo1000] = useState('');
  const [clientsNextDayTwo1100, setClientsNextDayTwo1100] = useState('');
  const [clientsNextDayTwo1200, setClientsNextDayTwo1200] = useState('');
  const [clientsNextDayTwo1300, setClientsNextDayTwo1300] = useState('');
  const [clientsNextDayTwo1400, setClientsNextDayTwo1400] = useState('');
  const [clientsNextDayTwo1500, setClientsNextDayTwo1500] = useState('');
  const [clientsNextDayTwo1600, setClientsNextDayTwo1600] = useState('');
  const [clientsNextDayTwo1700, setClientsNextDayTwo1700] = useState('');
  const [clientsNextDayTwo1800, setClientsNextDayTwo1800] = useState('');
  const [clientsNextDayTwo1900, setClientsNextDayTwo1900] = useState('');
  const [clientsNextDayTwo2000, setClientsNextDayTwo2000] = useState('');
  const [clientsNextDayThree0800, setClientsNextDayThree0800] = useState('');
  const [clientsNextDayThree0900, setClientsNextDayThree0900] = useState('');
  const [clientsNextDayThree1000, setClientsNextDayThree1000] = useState('');
  const [clientsNextDayThree1100, setClientsNextDayThree1100] = useState('');
  const [clientsNextDayThree1200, setClientsNextDayThree1200] = useState('');
  const [clientsNextDayThree1300, setClientsNextDayThree1300] = useState('');
  const [clientsNextDayThree1400, setClientsNextDayThree1400] = useState('');
  const [clientsNextDayThree1500, setClientsNextDayThree1500] = useState('');
  const [clientsNextDayThree1600, setClientsNextDayThree1600] = useState('');
  const [clientsNextDayThree1700, setClientsNextDayThree1700] = useState('');
  const [clientsNextDayThree1800, setClientsNextDayThree1800] = useState('');
  const [clientsNextDayThree1900, setClientsNextDayThree1900] = useState('');
  const [clientsNextDayThree2000, setClientsNextDayThree2000] = useState('');
  const [clientsNextDayFour0800, setClientsNextDayFour0800] = useState('');
  const [clientsNextDayFour0900, setClientsNextDayFour0900] = useState('');
  const [clientsNextDayFour1000, setClientsNextDayFour1000] = useState('');
  const [clientsNextDayFour1100, setClientsNextDayFour1100] = useState('');
  const [clientsNextDayFour1200, setClientsNextDayFour1200] = useState('');
  const [clientsNextDayFour1300, setClientsNextDayFour1300] = useState('');
  const [clientsNextDayFour1400, setClientsNextDayFour1400] = useState('');
  const [clientsNextDayFour1500, setClientsNextDayFour1500] = useState('');
  const [clientsNextDayFour1600, setClientsNextDayFour1600] = useState('');
  const [clientsNextDayFour1700, setClientsNextDayFour1700] = useState('');
  const [clientsNextDayFour1800, setClientsNextDayFour1800] = useState('');
  const [clientsNextDayFour1900, setClientsNextDayFour1900] = useState('');
  const [clientsNextDayFour2000, setClientsNextDayFour2000] = useState('');
  const [clientsNextDayFive0800, setClientsNextDayFive0800] = useState('');
  const [clientsNextDayFive0900, setClientsNextDayFive0900] = useState('');
  const [clientsNextDayFive1000, setClientsNextDayFive1000] = useState('');
  const [clientsNextDayFive1100, setClientsNextDayFive1100] = useState('');
  const [clientsNextDayFive1200, setClientsNextDayFive1200] = useState('');
  const [clientsNextDayFive1300, setClientsNextDayFive1300] = useState('');
  const [clientsNextDayFive1400, setClientsNextDayFive1400] = useState('');
  const [clientsNextDayFive1500, setClientsNextDayFive1500] = useState('');
  const [clientsNextDayFive1600, setClientsNextDayFive1600] = useState('');
  const [clientsNextDayFive1700, setClientsNextDayFive1700] = useState('');
  const [clientsNextDayFive1800, setClientsNextDayFive1800] = useState('');
  const [clientsNextDayFive1900, setClientsNextDayFive1900] = useState('');
  const [clientsNextDayFive2000, setClientsNextDayFive2000] = useState('');
  const [clientsNextDaySix0800, setClientsNextDaySix0800] = useState('');
  const [clientsNextDaySix0900, setClientsNextDaySix0900] = useState('');
  const [clientsNextDaySix1000, setClientsNextDaySix1000] = useState('');
  const [clientsNextDaySix1100, setClientsNextDaySix1100] = useState('');
  const [clientsNextDaySix1200, setClientsNextDaySix1200] = useState('');
  const [clientsNextDaySix1300, setClientsNextDaySix1300] = useState('');
  const [clientsNextDaySix1400, setClientsNextDaySix1400] = useState('');
  const [clientsNextDaySix1500, setClientsNextDaySix1500] = useState('');
  const [clientsNextDaySix1600, setClientsNextDaySix1600] = useState('');
  const [clientsNextDaySix1700, setClientsNextDaySix1700] = useState('');
  const [clientsNextDaySix1800, setClientsNextDaySix1800] = useState('');
  const [clientsNextDaySix1900, setClientsNextDaySix1900] = useState('');
  const [clientsNextDaySix2000, setClientsNextDaySix2000] = useState('');
  const [today, setToday] = useState('');
  const [nextDay, setNextDay] = useState('');
  const [nextDay1, setNextDay1] = useState('');
  const [nextDay2, setNextDay2] = useState('');
  const [nextDay3, setNextDay3] = useState('');
  const [nextDay4, setNextDay4] = useState('');
  const [nextDay5, setNextDay5] = useState('');
  const [continueView, setContinueView] = useState(true);
  // console.log(clientsToday1700)
  
  useEffect(() => {
    if(dataAllClients === ''){
      clientAPI.getDataALLUsers().then(result => {
        const dateToday = moment().add(0, 'days').format('').slice(0, 10);
        const dateNextDay = moment().add(1, 'days').format('').slice(0, 10);
        const dateNextDay1 = moment().add(2, 'days').format('').slice(0, 10);
        const dateNextDay2 = moment().add(3, 'days').format('').slice(0, 10);
        const dateNextDay3 = moment().add(4, 'days').format('').slice(0, 10);
        const dateNextDay4 = moment().add(5, 'days').format('').slice(0, 10);
        const dateNextDay5 = moment().add(6, 'days').format('').slice(0, 10);

        const dayOfWeekToday = moment().add(0, 'days').format('dddd');
        const dayOfWeekNextDay = moment().add(1, 'days').format('dddd');
        const dayOfWeekNextDay1 = moment().add(2, 'days').format('dddd');
        const dayOfWeekNextDay2 = moment().add(3, 'days').format('dddd');
        const dayOfWeekNextDay3 = moment().add(4, 'days').format('dddd');
        const dayOfWeekNextDay4 = moment().add(5, 'days').format('dddd');
        const dayOfWeekNextDay5 = moment().add(6, 'days').format('dddd');
        function addThreeHours(dateString) {
          const date = new Date(dateString);
          date.setHours(date.getHours() + 3);
          return date.toISOString().slice(0, 10);
        }
        const getClientsDayTime = (time, date, dayOfWeek) => {
          const dataClients = result.filter(arr => arr.info.some(infoDate => addThreeHours(infoDate.date) === date && infoDate.time === time));
          const clients = dataClients.map(client => (
            client.info.find(value => (
              value.day === dayOfWeek.toLocaleLowerCase() &&
              value.time === time &&
              addThreeHours(value.date) === date
            ))
          )).filter(Boolean);
          return clients;
        };

// ========================TODAY================================================================================================
        setClientsToday0800(getClientsDayTime('08:00', dateToday, dayOfWeekToday));
        setClientsToday0900(getClientsDayTime('09:00', dateToday, dayOfWeekToday));
        setClientsToday1000(getClientsDayTime('10:00', dateToday, dayOfWeekToday));
        setClientsToday1100(getClientsDayTime('11:00', dateToday, dayOfWeekToday));
        setClientsToday1200(getClientsDayTime('12:00', dateToday, dayOfWeekToday));
        setClientsToday1300(getClientsDayTime('13:00', dateToday, dayOfWeekToday));
        setClientsToday1400(getClientsDayTime('14:00', dateToday, dayOfWeekToday));
        setClientsToday1500(getClientsDayTime('15:00', dateToday, dayOfWeekToday));
        setClientsToday1600(getClientsDayTime('16:00', dateToday, dayOfWeekToday));
        setClientsToday1700(getClientsDayTime('17:00', dateToday, dayOfWeekToday));
        setClientsToday1800(getClientsDayTime('18:00', dateToday, dayOfWeekToday));
        setClientsToday1900(getClientsDayTime('19:00', dateToday, dayOfWeekToday));
        setClientsToday2000(getClientsDayTime('20:00', dateToday, dayOfWeekToday));
// =========================NextDay================================================================================================
        setClientsNextDay0800(getClientsDayTime('08:00', dateNextDay, dayOfWeekNextDay));
        setClientsNextDay0900(getClientsDayTime('09:00', dateNextDay, dayOfWeekNextDay));
        setClientsNextDay1000(getClientsDayTime('10:00', dateNextDay, dayOfWeekNextDay));
        setClientsNextDay1100(getClientsDayTime('11:00', dateNextDay, dayOfWeekNextDay));
        setClientsNextDay1200(getClientsDayTime('12:00', dateNextDay, dayOfWeekNextDay));
        setClientsNextDay1300(getClientsDayTime('13:00', dateNextDay, dayOfWeekNextDay));
        setClientsNextDay1400(getClientsDayTime('14:00', dateNextDay, dayOfWeekNextDay));
        setClientsNextDay1500(getClientsDayTime('15:00', dateNextDay, dayOfWeekNextDay));
        setClientsNextDay1600(getClientsDayTime('16:00', dateNextDay, dayOfWeekNextDay));
        setClientsNextDay1700(getClientsDayTime('17:00', dateNextDay, dayOfWeekNextDay));
        setClientsNextDay1800(getClientsDayTime('18:00', dateNextDay, dayOfWeekNextDay));
        setClientsNextDay1900(getClientsDayTime('19:00', dateNextDay, dayOfWeekNextDay));
        setClientsNextDay2000(getClientsDayTime('20:00', dateNextDay, dayOfWeekNextDay));

// =========================NextDayTwo================================================================================================
        setClientsNextDayTwo0800(getClientsDayTime('08:00', dateNextDay1, dayOfWeekNextDay1));
        setClientsNextDayTwo0900(getClientsDayTime('09:00', dateNextDay1, dayOfWeekNextDay1));
        setClientsNextDayTwo1000(getClientsDayTime('10:00', dateNextDay1, dayOfWeekNextDay1));
        setClientsNextDayTwo1100(getClientsDayTime('11:00', dateNextDay1, dayOfWeekNextDay1));
        setClientsNextDayTwo1200(getClientsDayTime('12:00', dateNextDay1, dayOfWeekNextDay1));
        setClientsNextDayTwo1300(getClientsDayTime('13:00', dateNextDay1, dayOfWeekNextDay1));
        setClientsNextDayTwo1400(getClientsDayTime('14:00', dateNextDay1, dayOfWeekNextDay1));
        setClientsNextDayTwo1500(getClientsDayTime('15:00', dateNextDay1, dayOfWeekNextDay1));
        setClientsNextDayTwo1600(getClientsDayTime('16:00', dateNextDay1, dayOfWeekNextDay1));
        setClientsNextDayTwo1700(getClientsDayTime('17:00', dateNextDay1, dayOfWeekNextDay1));
        setClientsNextDayTwo1800(getClientsDayTime('18:00', dateNextDay1, dayOfWeekNextDay1));
        setClientsNextDayTwo1900(getClientsDayTime('19:00', dateNextDay1, dayOfWeekNextDay1));
        setClientsNextDayTwo2000(getClientsDayTime('20:00', dateNextDay1, dayOfWeekNextDay1));
// =========================NextDayThree================================================================================================
        setClientsNextDayThree0800(getClientsDayTime('08:00', dateNextDay2, dayOfWeekNextDay2));
        setClientsNextDayThree0900(getClientsDayTime('09:00', dateNextDay2, dayOfWeekNextDay2));
        setClientsNextDayThree1000(getClientsDayTime('10:00', dateNextDay2, dayOfWeekNextDay2));
        setClientsNextDayThree1100(getClientsDayTime('11:00', dateNextDay2, dayOfWeekNextDay2));
        setClientsNextDayThree1200(getClientsDayTime('12:00', dateNextDay2, dayOfWeekNextDay2));
        setClientsNextDayThree1300(getClientsDayTime('13:00', dateNextDay2, dayOfWeekNextDay2));
        setClientsNextDayThree1400(getClientsDayTime('14:00', dateNextDay2, dayOfWeekNextDay2));
        setClientsNextDayThree1500(getClientsDayTime('15:00', dateNextDay2, dayOfWeekNextDay2));
        setClientsNextDayThree1600(getClientsDayTime('16:00', dateNextDay2, dayOfWeekNextDay2));
        setClientsNextDayThree1700(getClientsDayTime('17:00', dateNextDay2, dayOfWeekNextDay2));
        setClientsNextDayThree1800(getClientsDayTime('18:00', dateNextDay2, dayOfWeekNextDay2));
        setClientsNextDayThree1900(getClientsDayTime('19:00', dateNextDay2, dayOfWeekNextDay2));
        setClientsNextDayThree2000(getClientsDayTime('20:00', dateNextDay2, dayOfWeekNextDay2));
// =========================NextDayFour================================================================================================
        setClientsNextDayFour0800(getClientsDayTime('08:00', dateNextDay3, dayOfWeekNextDay3));
        setClientsNextDayFour0900(getClientsDayTime('09:00', dateNextDay3, dayOfWeekNextDay3));
        setClientsNextDayFour1000(getClientsDayTime('10:00', dateNextDay3, dayOfWeekNextDay3));
        setClientsNextDayFour1100(getClientsDayTime('11:00', dateNextDay3, dayOfWeekNextDay3));
        setClientsNextDayFour1200(getClientsDayTime('12:00', dateNextDay3, dayOfWeekNextDay3));
        setClientsNextDayFour1300(getClientsDayTime('13:00', dateNextDay3, dayOfWeekNextDay3));
        setClientsNextDayFour1400(getClientsDayTime('14:00', dateNextDay3, dayOfWeekNextDay3));
        setClientsNextDayFour1500(getClientsDayTime('15:00', dateNextDay3, dayOfWeekNextDay3));
        setClientsNextDayFour1600(getClientsDayTime('16:00', dateNextDay3, dayOfWeekNextDay3));
        setClientsNextDayFour1700(getClientsDayTime('17:00', dateNextDay3, dayOfWeekNextDay3));
        setClientsNextDayFour1800(getClientsDayTime('18:00', dateNextDay3, dayOfWeekNextDay3));
        setClientsNextDayFour1900(getClientsDayTime('19:00', dateNextDay3, dayOfWeekNextDay3));
        setClientsNextDayFour2000(getClientsDayTime('20:00', dateNextDay3, dayOfWeekNextDay3));
// =========================NextDayFive================================================================================================
        setClientsNextDayFive0800(getClientsDayTime('08:00', dateNextDay4, dayOfWeekNextDay4));
        setClientsNextDayFive0900(getClientsDayTime('09:00', dateNextDay4, dayOfWeekNextDay4));
        setClientsNextDayFive1000(getClientsDayTime('10:00', dateNextDay4, dayOfWeekNextDay4));
        setClientsNextDayFive1100(getClientsDayTime('11:00', dateNextDay4, dayOfWeekNextDay4));
        setClientsNextDayFive1200(getClientsDayTime('12:00', dateNextDay4, dayOfWeekNextDay4));
        setClientsNextDayFive1300(getClientsDayTime('13:00', dateNextDay4, dayOfWeekNextDay4));
        setClientsNextDayFive1400(getClientsDayTime('14:00', dateNextDay4, dayOfWeekNextDay4));
        setClientsNextDayFive1500(getClientsDayTime('15:00', dateNextDay4, dayOfWeekNextDay4));
        setClientsNextDayFive1600(getClientsDayTime('16:00', dateNextDay4, dayOfWeekNextDay4));
        setClientsNextDayFive1700(getClientsDayTime('17:00', dateNextDay4, dayOfWeekNextDay4));
        setClientsNextDayFive1800(getClientsDayTime('18:00', dateNextDay4, dayOfWeekNextDay4));
        setClientsNextDayFive1900(getClientsDayTime('19:00', dateNextDay4, dayOfWeekNextDay4));
        setClientsNextDayFive2000(getClientsDayTime('20:00', dateNextDay4, dayOfWeekNextDay4));
// =========================NextDaySix================================================================================================
        setClientsNextDaySix0800(getClientsDayTime('08:00', dateNextDay5, dayOfWeekNextDay5));
        setClientsNextDaySix0900(getClientsDayTime('09:00', dateNextDay5, dayOfWeekNextDay5));
        setClientsNextDaySix1000(getClientsDayTime('10:00', dateNextDay5, dayOfWeekNextDay5));
        setClientsNextDaySix1100(getClientsDayTime('11:00', dateNextDay5, dayOfWeekNextDay5));
        setClientsNextDaySix1200(getClientsDayTime('12:00', dateNextDay5, dayOfWeekNextDay5));
        setClientsNextDaySix1300(getClientsDayTime('13:00', dateNextDay5, dayOfWeekNextDay5));
        setClientsNextDaySix1400(getClientsDayTime('14:00', dateNextDay5, dayOfWeekNextDay5));
        setClientsNextDaySix1500(getClientsDayTime('15:00', dateNextDay5, dayOfWeekNextDay5));
        setClientsNextDaySix1600(getClientsDayTime('16:00', dateNextDay5, dayOfWeekNextDay5));
        setClientsNextDaySix1700(getClientsDayTime('17:00', dateNextDay5, dayOfWeekNextDay5));
        setClientsNextDaySix1800(getClientsDayTime('18:00', dateNextDay5, dayOfWeekNextDay5));
        setClientsNextDaySix1900(getClientsDayTime('19:00', dateNextDay5, dayOfWeekNextDay5));
        setClientsNextDaySix2000(getClientsDayTime('20:00', dateNextDay5, dayOfWeekNextDay5));
        setDataAllClients(dayOfWeekToday);
    })}
  }, [dataAllClients, clientsToday0800, clientsToday0900, clientsToday1000, clientsToday1100, clientsToday1200, clientsToday1300,
    clientsToday1400, clientsToday1500, clientsToday1600, clientsToday1700, clientsToday1800, clientsToday1900, clientsToday2000,
  clientsNextDay0800, clientsNextDay0900, clientsNextDay1000, clientsNextDay1100, clientsNextDay1200, clientsNextDay1300,
    clientsNextDay1400, clientsNextDay1500, clientsNextDay1600, clientsNextDay1700, clientsNextDay1800, clientsNextDay1900, clientsToday2000])
          // console.log(clientsNextDay1400);
  useEffect(() => {
    const dayOfWeekToday = moment().add(0, 'days').format('dddd');
    const dayTranslate = () => {
    if (dayOfWeekToday.toLocaleLowerCase() === 'monday') {
          return[
            setToday('Понеділок'),
            setNextDay('Вівторок'),
            setNextDay1('Середа'),
            setNextDay2('Четвер'),
            setNextDay3('П`ятниця'),
            setNextDay4('Субота'),
            setNextDay5('Неділя'),
          ]
        }
        if (dayOfWeekToday.toLocaleLowerCase() === 'tuesday') {
          return[
            setToday('Вівторок'),
            setNextDay('Середа'),
            setNextDay1('Четвер'),
            setNextDay2('П`ятниця'),
            setNextDay3('Субота'),
            setNextDay4('Неділя'),
            setNextDay5('Понеділок'),
          ]
        }
        if (dayOfWeekToday.toLocaleLowerCase() === 'wednesday') {
          return[
            setToday('Середа'),
            setNextDay('Четвер'),
            setNextDay1('П`ятниця'),
            setNextDay2('Субота'),
            setNextDay3('Неділя'),
            setNextDay4('Понеділок'),
            setNextDay5('Вівторок'),
          ]
        }
        if (dayOfWeekToday.toLocaleLowerCase() === 'thursday') {
          return[
            setToday('Четвер'),
            setNextDay('П`ятниця'),
            setNextDay1('Субота'),
            setNextDay2('Неділя'),
            setNextDay3('Понеділок'),
            setNextDay4('Вівторок'),
            setNextDay5('Середа'),
          ]
        }
        if (dayOfWeekToday.toLocaleLowerCase() === 'friday') {
          return[
            setToday('П`ятниця'),
            setNextDay('Субота'),
            setNextDay1('Неділя'),
            setNextDay2('Понеділок'),
            setNextDay3('Вівторок'),
            setNextDay4('Середа'),
            setNextDay5('Четвер'),
          ]
        }
        if (dayOfWeekToday.toLocaleLowerCase() === 'saturday') {
          return[
            setToday('Субота'),
            setNextDay('Неділя'),
            setNextDay1('Понеділок'),
            setNextDay2('Вівторок'),
            setNextDay3('Середа'),
            setNextDay4('Четвер'),
            setNextDay5('П`ятниця'),
          ]
        }
        if (dayOfWeekToday.toLocaleLowerCase() === 'sunday') {
          return[
            setToday('Неділя'),
            setNextDay('Понеділок'),
            setNextDay1('Вівторок'),
            setNextDay2('Середа'),
            setNextDay3('Четвер'),
            setNextDay4('П`ятниця'),
            setNextDay5('Субота'),
          ]
        }
      };
      dayTranslate();
  }, [today]);
  // const instaNickName = '12121212';
  // const urlInsta = `https://www.instagram.com/${instaNickName.substring(1)}/`
  const URLInsta = ({ item }) => {
    // console.log(item)
    const urlInstagram = `https://www.instagram.com/${item.instaNickName.substring(1)}`
    if (item.instaNickName === undefined) {
      // console.log("DADADA")
      const notFound = `https://www.instagram.com/`;
      return (notFound);
    }
    return (urlInstagram);
  };

  const ContinueBTN = () => {
    if (continueView === true) {
      return(setContinueView(false));
    }
    setContinueView(true);
  };

  const calculateHeight = (...clientCounts) => {
    const baseHeight = 38; // базова висота для одного клієнта
    const minHeight = 50; // мінімальна висота
    const maxHeight = 500; // максимальна висота
    const maxClients = Math.max(...clientCounts); // вибираємо максимальну кількість клієнтів
    const height = baseHeight * maxClients; // висота в залежності від кількості клієнтів
    const cappedHeight = Math.max(minHeight, Math.min(height, maxHeight)); // обмежуємо висоту від мінімальної до максимальної
  return `${cappedHeight}px`; // додаємо "px" для встановлення висоти в CSS
};
  // console.log(clientsNextDay1100)
  return(
    <div
      // style={{ display: 'flex', flexDirection: 'column' }}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
    >
      <div>
        {/* <DayOfWeekWrapper><p>День/</p><p>Час</p></DayOfWeekWrapper> */}
        {continueView ?
        <WrapperBTN>
          <NextDaysBTN onClick={ContinueBTN}>Next</NextDaysBTN>
        </WrapperBTN>
        :
        <WrapperBTN>
          <NextDaysBTN onClick={ContinueBTN}>Back</NextDaysBTN>
        </WrapperBTN>}
        <WrapperInfoTime style={{
          height: calculateHeight(
            clientsToday0800.length, clientsNextDay0800.length, clientsNextDayTwo0800.length, clientsNextDayThree0800.length,
            clientsNextDayFour0800.length, clientsNextDayFive0800.length, clientsNextDaySix0800.length
          )
        }}><p>8:00</p></WrapperInfoTime>
        <WrapperInfoTime style={{
          height: calculateHeight(
            clientsToday0900.length, clientsNextDay0900.length, clientsNextDayTwo0900.length, clientsNextDayThree0900.length,
            clientsNextDayFour0900.length, clientsNextDayFive0900.length, clientsNextDaySix0900.length
          )
        }}><p>9:00</p></WrapperInfoTime>
        <WrapperInfoTime style={{
          height: calculateHeight(
            clientsToday1000.length, clientsNextDay1000.length, clientsNextDayTwo1000.length, clientsNextDayThree1000.length,
            clientsNextDayFour1000.length, clientsNextDayFive1000.length, clientsNextDaySix1000.length
          )
        }}><p>10:00</p></WrapperInfoTime>
        <WrapperInfoTime style={{
          height: calculateHeight(
            clientsToday1100.length, clientsNextDay1100.length, clientsNextDayTwo1100.length, clientsNextDayThree1100.length,
            clientsNextDayFour1100.length, clientsNextDayFive1100.length, clientsNextDaySix1100.length
          )
        }}><p>11:00</p></WrapperInfoTime>
        <WrapperInfoTime style={{
          height: calculateHeight(
            clientsToday1200.length, clientsNextDay1200.length, clientsNextDayTwo1200.length, clientsNextDayThree1200.length,
            clientsNextDayFour1200.length, clientsNextDayFive1200.length, clientsNextDaySix1200.length
          )
        }}><p>12:00</p></WrapperInfoTime>
        <WrapperInfoTime style={{
          height: calculateHeight(
            clientsToday1300.length, clientsNextDay1300.length, clientsNextDayTwo1300.length, clientsNextDayThree1300.length,
            clientsNextDayFour1300.length, clientsNextDayFive1300.length, clientsNextDaySix1300.length
          )
        }}><p>13:00</p></WrapperInfoTime>
        <WrapperInfoTime style={{
          height: calculateHeight(
            clientsToday1400.length, clientsNextDay1400.length, clientsNextDayTwo1400.length, clientsNextDayThree1400.length,
            clientsNextDayFour1400.length, clientsNextDayFive1400.length, clientsNextDaySix1400.length
          )
        }}><p>14:00</p></WrapperInfoTime>
        <WrapperInfoTime style={{
          height: calculateHeight(
            clientsToday1500.length, clientsNextDay1500.length, clientsNextDayTwo1500.length, clientsNextDayThree1500.length,
            clientsNextDayFour1500.length, clientsNextDayFive1500.length, clientsNextDaySix1500.length
          )
        }}><p>15:00</p></WrapperInfoTime>
        <WrapperInfoTime style={{
          height: calculateHeight(
            clientsToday1600.length, clientsNextDay1600.length, clientsNextDayTwo1600.length, clientsNextDayThree1600.length,
            clientsNextDayFour1600.length, clientsNextDayFive1600.length, clientsNextDaySix1600.length
          )
        }}><p>16:00</p></WrapperInfoTime>
        <WrapperInfoTime style={{
          height: calculateHeight(
            clientsToday1700.length, clientsNextDay1700.length, clientsNextDayTwo1700.length, clientsNextDayThree1700.length,
            clientsNextDayFour1700.length, clientsNextDayFive1700.length, clientsNextDaySix1700.length
          )
        }}><p>17:00</p></WrapperInfoTime>
        <WrapperInfoTime style={{
          height: calculateHeight(
            clientsToday1800.length, clientsNextDay1800.length, clientsNextDayTwo1800.length, clientsNextDayThree1800.length,
            clientsNextDayFour1800.length, clientsNextDayFive1800.length, clientsNextDaySix1800.length
          )
        }}><p>18:00</p></WrapperInfoTime>
        <WrapperInfoTime style={{
          height: calculateHeight(
            clientsToday1900.length, clientsNextDay1900.length, clientsNextDayTwo1900.length, clientsNextDayThree1900.length,
            clientsNextDayFour1900.length, clientsNextDayFive1900.length, clientsNextDaySix1900.length
          )
        }}><p>19:00</p></WrapperInfoTime>
        <WrapperInfoTime style={{
          height: calculateHeight(
            clientsToday2000.length, clientsNextDay2000.length, clientsNextDayTwo2000.length, clientsNextDayThree2000.length,
            clientsNextDayFour2000.length, clientsNextDayFive2000.length, clientsNextDaySix2000.length
          )
        }}><p>20:00</p></WrapperInfoTime>

      </div>
      
      {continueView ?
        <>
          <SortingFirstRender
            calculateHeight={calculateHeight}
            URLInsta={URLInsta}
            clientsToday0800={clientsToday0800}
            clientsToday0900={clientsToday0900}
            clientsToday1000={clientsToday1000}
            clientsToday1100={clientsToday1100}
            clientsToday1200={clientsToday1200}
            clientsToday1300={clientsToday1300}
            clientsToday1400={clientsToday1400}
            clientsToday1500={clientsToday1500}
            clientsToday1600={clientsToday1600}
            clientsToday1700={clientsToday1700}
            clientsToday1800={clientsToday1800}
            clientsToday1900={clientsToday1900}
            clientsToday2000={clientsToday2000}
            clientsNextDay0800={clientsNextDay0800}
            clientsNextDay0900={clientsNextDay0900}
            clientsNextDay1000={clientsNextDay1000}
            clientsNextDay1100={clientsNextDay1100}
            clientsNextDay1200={clientsNextDay1200}
            clientsNextDay1300={clientsNextDay1300}
            clientsNextDay1400={clientsNextDay1400}
            clientsNextDay1500={clientsNextDay1500}
            clientsNextDay1600={clientsNextDay1600}
            clientsNextDay1700={clientsNextDay1700}
            clientsNextDay1800={clientsNextDay1800}
            clientsNextDay1900={clientsNextDay1900}
            clientsNextDay2000={clientsNextDay2000}
            clientsNextDayTwo0800={clientsNextDayTwo0800}
            clientsNextDayTwo0900={clientsNextDayTwo0900}
            clientsNextDayTwo1000={clientsNextDayTwo1000}
            clientsNextDayTwo1100={clientsNextDayTwo1100}
            clientsNextDayTwo1200={clientsNextDayTwo1200}
            clientsNextDayTwo1300={clientsNextDayTwo1300}
            clientsNextDayTwo1400={clientsNextDayTwo1400}
            clientsNextDayTwo1500={clientsNextDayTwo1500}
            clientsNextDayTwo1600={clientsNextDayTwo1600}
            clientsNextDayTwo1700={clientsNextDayTwo1700}
            clientsNextDayTwo1800={clientsNextDayTwo1800}
            clientsNextDayTwo1900={clientsNextDayTwo1900}
            clientsNextDayTwo2000={clientsNextDayTwo2000}
            clientsNextDayThree0800={clientsNextDayThree0800}
            clientsNextDayThree0900={clientsNextDayThree0900}
            clientsNextDayThree1000={clientsNextDayThree1000}
            clientsNextDayThree1100={clientsNextDayThree1100}
            clientsNextDayThree1200={clientsNextDayThree1200}
            clientsNextDayThree1300={clientsNextDayThree1300}
            clientsNextDayThree1400={clientsNextDayThree1400}
            clientsNextDayThree1500={clientsNextDayThree1500}
            clientsNextDayThree1600={clientsNextDayThree1600}
            clientsNextDayThree1700={clientsNextDayThree1700}
            clientsNextDayThree1800={clientsNextDayThree1800}
            clientsNextDayThree1900={clientsNextDayThree1900}
            clientsNextDayThree2000={clientsNextDayThree2000}
            clientsNextDayFour0800={clientsNextDayFour0800}
            clientsNextDayFour0900={clientsNextDayFour0900}
            clientsNextDayFour1000={clientsNextDayFour1000}
            clientsNextDayFour1100={clientsNextDayFour1100}
            clientsNextDayFour1200={clientsNextDayFour1200}
            clientsNextDayFour1300={clientsNextDayFour1300}
            clientsNextDayFour1400={clientsNextDayFour1400}
            clientsNextDayFour1500={clientsNextDayFour1500}
            clientsNextDayFour1600={clientsNextDayFour1600}
            clientsNextDayFour1700={clientsNextDayFour1700}
            clientsNextDayFour1800={clientsNextDayFour1800}
            clientsNextDayFour1900={clientsNextDayFour1900}
            clientsNextDayFour2000={clientsNextDayFour2000}
            clientsNextDayFive0800={clientsNextDayFive0800}
            clientsNextDayFive0900={clientsNextDayFive0900}
            clientsNextDayFive1000={clientsNextDayFive1000}
            clientsNextDayFive1100={clientsNextDayFive1100}
            clientsNextDayFive1200={clientsNextDayFive1200}
            clientsNextDayFive1300={clientsNextDayFive1300}
            clientsNextDayFive1400={clientsNextDayFive1400}
            clientsNextDayFive1500={clientsNextDayFive1500}
            clientsNextDayFive1600={clientsNextDayFive1600}
            clientsNextDayFive1700={clientsNextDayFive1700}
            clientsNextDayFive1800={clientsNextDayFive1800}
            clientsNextDayFive1900={clientsNextDayFive1900}
            clientsNextDayFive2000={clientsNextDayFive2000}
            clientsNextDaySix0800={clientsNextDaySix0800}
            clientsNextDaySix0900={clientsNextDaySix0900}
            clientsNextDaySix1000={clientsNextDaySix1000}
            clientsNextDaySix1100={clientsNextDaySix1100}
            clientsNextDaySix1200={clientsNextDaySix1200}
            clientsNextDaySix1300={clientsNextDaySix1300}
            clientsNextDaySix1400={clientsNextDaySix1400}
            clientsNextDaySix1500={clientsNextDaySix1500}
            clientsNextDaySix1600={clientsNextDaySix1600}
            clientsNextDaySix1700={clientsNextDaySix1700}
            clientsNextDaySix1800={clientsNextDaySix1800}
            clientsNextDaySix1900={clientsNextDaySix1900}
            clientsNextDaySix2000={clientsNextDaySix2000}
            today={today}
            nextDay={nextDay}
            nextDay1={nextDay1}
          />
        </>
        :
        <>
          <SortingSecondRender
            calculateHeight={calculateHeight}
            URLInsta={URLInsta}
            clientsToday0800={clientsToday0800}
            clientsToday0900={clientsToday0900}
            clientsToday1000={clientsToday1000}
            clientsToday1100={clientsToday1100}
            clientsToday1200={clientsToday1200}
            clientsToday1300={clientsToday1300}
            clientsToday1400={clientsToday1400}
            clientsToday1500={clientsToday1500}
            clientsToday1600={clientsToday1600}
            clientsToday1700={clientsToday1700}
            clientsToday1800={clientsToday1800}
            clientsToday1900={clientsToday1900}
            clientsToday2000={clientsToday2000}
            clientsNextDay0800={clientsNextDay0800}
            clientsNextDay0900={clientsNextDay0900}
            clientsNextDay1000={clientsNextDay1000}
            clientsNextDay1100={clientsNextDay1100}
            clientsNextDay1200={clientsNextDay1200}
            clientsNextDay1300={clientsNextDay1300}
            clientsNextDay1400={clientsNextDay1400}
            clientsNextDay1500={clientsNextDay1500}
            clientsNextDay1600={clientsNextDay1600}
            clientsNextDay1700={clientsNextDay1700}
            clientsNextDay1800={clientsNextDay1800}
            clientsNextDay1900={clientsNextDay1900}
            clientsNextDay2000={clientsNextDay2000}
            clientsNextDayTwo0800={clientsNextDayTwo0800}
            clientsNextDayTwo0900={clientsNextDayTwo0900}
            clientsNextDayTwo1000={clientsNextDayTwo1000}
            clientsNextDayTwo1100={clientsNextDayTwo1100}
            clientsNextDayTwo1200={clientsNextDayTwo1200}
            clientsNextDayTwo1300={clientsNextDayTwo1300}
            clientsNextDayTwo1400={clientsNextDayTwo1400}
            clientsNextDayTwo1500={clientsNextDayTwo1500}
            clientsNextDayTwo1600={clientsNextDayTwo1600}
            clientsNextDayTwo1700={clientsNextDayTwo1700}
            clientsNextDayTwo1800={clientsNextDayTwo1800}
            clientsNextDayTwo1900={clientsNextDayTwo1900}
            clientsNextDayTwo2000={clientsNextDayTwo2000}
            clientsNextDayThree0800={clientsNextDayThree0800}
            clientsNextDayThree0900={clientsNextDayThree0900}
            clientsNextDayThree1000={clientsNextDayThree1000}
            clientsNextDayThree1100={clientsNextDayThree1100}
            clientsNextDayThree1200={clientsNextDayThree1200}
            clientsNextDayThree1300={clientsNextDayThree1300}
            clientsNextDayThree1400={clientsNextDayThree1400}
            clientsNextDayThree1500={clientsNextDayThree1500}
            clientsNextDayThree1600={clientsNextDayThree1600}
            clientsNextDayThree1700={clientsNextDayThree1700}
            clientsNextDayThree1800={clientsNextDayThree1800}
            clientsNextDayThree1900={clientsNextDayThree1900}
            clientsNextDayThree2000={clientsNextDayThree2000}
            clientsNextDayFour0800={clientsNextDayFour0800}
            clientsNextDayFour0900={clientsNextDayFour0900}
            clientsNextDayFour1000={clientsNextDayFour1000}
            clientsNextDayFour1100={clientsNextDayFour1100}
            clientsNextDayFour1200={clientsNextDayFour1200}
            clientsNextDayFour1300={clientsNextDayFour1300}
            clientsNextDayFour1400={clientsNextDayFour1400}
            clientsNextDayFour1500={clientsNextDayFour1500}
            clientsNextDayFour1600={clientsNextDayFour1600}
            clientsNextDayFour1700={clientsNextDayFour1700}
            clientsNextDayFour1800={clientsNextDayFour1800}
            clientsNextDayFour1900={clientsNextDayFour1900}
            clientsNextDayFour2000={clientsNextDayFour2000}
            clientsNextDayFive0800={clientsNextDayFive0800}
            clientsNextDayFive0900={clientsNextDayFive0900}
            clientsNextDayFive1000={clientsNextDayFive1000}
            clientsNextDayFive1100={clientsNextDayFive1100}
            clientsNextDayFive1200={clientsNextDayFive1200}
            clientsNextDayFive1300={clientsNextDayFive1300}
            clientsNextDayFive1400={clientsNextDayFive1400}
            clientsNextDayFive1500={clientsNextDayFive1500}
            clientsNextDayFive1600={clientsNextDayFive1600}
            clientsNextDayFive1700={clientsNextDayFive1700}
            clientsNextDayFive1800={clientsNextDayFive1800}
            clientsNextDayFive1900={clientsNextDayFive1900}
            clientsNextDayFive2000={clientsNextDayFive2000}
            clientsNextDaySix0800={clientsNextDaySix0800}
            clientsNextDaySix0900={clientsNextDaySix0900}
            clientsNextDaySix1000={clientsNextDaySix1000}
            clientsNextDaySix1100={clientsNextDaySix1100}
            clientsNextDaySix1200={clientsNextDaySix1200}
            clientsNextDaySix1300={clientsNextDaySix1300}
            clientsNextDaySix1400={clientsNextDaySix1400}
            clientsNextDaySix1500={clientsNextDaySix1500}
            clientsNextDaySix1600={clientsNextDaySix1600}
            clientsNextDaySix1700={clientsNextDaySix1700}
            clientsNextDaySix1800={clientsNextDaySix1800}
            clientsNextDaySix1900={clientsNextDaySix1900}
            clientsNextDaySix2000={clientsNextDaySix2000}
            nextDay2={nextDay2}
            nextDay3={nextDay3}
            nextDay4={nextDay4}
            nextDay5={nextDay5}
          />
        </>
      }      
    </div>
  )}

export default SortingTrainee;