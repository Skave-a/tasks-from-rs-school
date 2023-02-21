import { createWinner, getWinner, getStatus, updateWinner } from '../API/API-winners';
import { INewWin } from '../utils/types';

export const setWinners = async ({ id, time }: INewWin) => {
  const status = await getStatus(id);
  if (status === 404) {
    const data = {
      id,
      wins: 1,
      time,
    };
    await createWinner(data);
  } else {
    const winner = await getWinner(id);
    const newTime = time < winner.time ? time : winner.time;
    const newData = {
      id,
      wins: winner.wins + 1,
      time: newTime,
    };
    await updateWinner(id, newData);
  }
};
