import { url3000 } from '../utils/constants';
import { IDriveMode, IstartEngine } from '../utils/types';

export const startEngine = async (id: number): Promise<IstartEngine> => {
  try {
    const resp = await fetch(`${url3000}/engine?id=${id}&status=started`, {
      method: 'PATCH',
    });
    return resp.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const drive = async (id: number): Promise<IDriveMode> => {
  try {
    const resp = await fetch(`${url3000}/engine?id=${id}&status=drive`, {
      method: 'PATCH',
    });
    return resp.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const stopEngine = async (id: number): Promise<IstartEngine> => {
  try {
    const resp = await fetch(`${url3000}/engine?id=${id}&status=stopped`, {
      method: 'PATCH',
    });
    return resp.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};
