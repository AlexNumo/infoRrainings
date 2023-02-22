import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  instance,
  tgSandra
} from './api';

export const getDataALL = async () => {
  try {
    const result = await instance.get(`/api`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const sendDataUsers = async ({ id, info }) => {
  try {
    const res = await instance.post(`/tgbot`, { id, info });
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const sendVisitTrainee = async (id, status) => {
  try {
    if (status.status === true) {
      const res = await instance.put(`/tgbot/visit`, { id, status });
      toast.success(`Підтверджено заняття для клієнта "${res.data.info[0].name}"`)
    return res;
    }
    if (status.status === false) {
      const res = await instance.put(`/tgbot/visit`, { id, status });
      toast.success(`Скасовано заняття для клієнта "${res.data.info[0].name}"`)
    return res;
    }   
  } catch (e) {
    toast.error('Щось пішло не так');
    console.error(e.message);
  }
};

export const deleteDataUsers = async (id) => {
  try {
    const result = await instance.put(`/tgbot`, id);
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getDataALLUsers = async () => {
  try {
    const result = await instance.get(`/tgbot`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

const sendTgRecord = async ({id, day_translate, clientName, kind_trainee, time, date, instaNickName}) => {
  try {
    const urlInsta = `https://www.instagram.com/${instaNickName.substring(1)}/`
    const res = await tgSandra.post(`Записався клієнт ${clientName} на тренування ${kind_trainee} в ${day_translate} о ${time}. Номер телефону клієнта ${id}, дата тренування: ${date}, Instagram: ${urlInsta}`,);
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};
export const clientAPI = {
  getDataALL,
  sendDataUsers,
  sendVisitTrainee,
  deleteDataUsers,
  getDataALLUsers,
  sendTgRecord
};