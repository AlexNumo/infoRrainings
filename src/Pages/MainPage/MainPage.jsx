import { useState } from 'react';
import TGBot from 'Pages/TGBot/TGBot';
import Record from 'Pages/Record/Record';
import Logo from 'Components/Logo/Logo';
import {
  Wrapper,
  WrapperStyle,
  BTN
} from './MainPage.styled';

const MainPage = () => {
  const [showTGBot, setShowTGBot] = useState(false);
  const [showInfoRecord, setInfoRecord] = useState(false);

  const ShowInfoRecordHandle = () => {
    if (showInfoRecord === true) {
      setShowTGBot(false);
      setInfoRecord(false);
      return;
    }
    setShowTGBot(false);
    setInfoRecord(true);
    return;
  };

    const ShowTGBotTrainee = () => {
    if (showTGBot === true) {
      setShowTGBot(false);
      setInfoRecord(false);
      return;
    }
    setShowTGBot(true);
    setInfoRecord(false);
    return;
  };
  
  return (
    <Wrapper>
      <WrapperStyle>
        <BTN type='button' onClick={ShowInfoRecordHandle} className={showInfoRecord ? 'active' : ''}>ЗАПИСИ</BTN>
        <BTN type='button' onClick={ShowTGBotTrainee} className={showTGBot ? 'active' : ''}>Telegram BOT</BTN>
      </WrapperStyle>
      <Logo/>
      {showInfoRecord ? <Record/> : null}
      {showTGBot ? <TGBot/> : null}
    </Wrapper>
  )
};

export default MainPage;