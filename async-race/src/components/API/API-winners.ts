import { url3000 } from '../utils/constants';
import { IWinner } from '../utils/types';

export const getWinner = async (id: number): Promise<IWinner> => {
  try {
    const resp = await fetch(`${url3000}/winners?id=${id}`);
    const res = await resp.json();
    return res[0];
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getAllWinners = async (
  page: number,
  order = 'ASC',
  sort = 'time',
  limit = 10
): Promise<{ result: IWinner[]; count: number }> => {
  try {
    const resp = await fetch(`${url3000}/winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
    const res: Array<IWinner> = await resp.json();
    return {
      result: res,
      count: Number(resp.headers.get('X-Total-Count')) || 0,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const createWinner = async (theFirst: IWinner): Promise<number> => {
  try {
    const resp = await fetch(`${url3000}/winners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(theFirst),
    });
    return resp.status;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getStatus = async (id: number) => {
  try {
    return (await fetch(`${url3000}/winners/${id}`)).status;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateWinner = async (id: number, body: IWinner) => {
  try {
    const resp = await fetch(`${url3000}/winners/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return resp.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};
