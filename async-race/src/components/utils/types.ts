export interface ICar {
  id: number;
  name: string;
  color: string;
}

export interface IWithOutIDCar {
  id?: number;
  name: string;
  color: string;
}

export interface INewCar {
  name: string;
  color: string;
}

export interface IGetCar {
  cars: ICar[];
  count: number;
}

export interface IstartEngine {
  velocity: number;
  distance: number;
}

export interface IDriveMode {
  success: boolean;
}

export interface IStartCar {
  success: boolean;
  id: number;
  time: number;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface INewWin {
  name?: string;
  color?: string;
  id: number;
  time: number;
}
