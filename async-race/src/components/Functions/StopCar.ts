import { stopEngine } from "../API/API-engine";

export async function StopCar(id: number, car: HTMLElement) {
await stopEngine(id);
  const animation = car.getAnimations();
  if (animation[0]) {
    animation[0].finish();
    animation[0].onfinish = () => {
      car.style.left = '100px';
    };
  }
  car.style.left = '100px';
}

export function StopCar500(id: number, car: HTMLElement) {
  const animation = car.getAnimations();
  if (animation[0]) {
    animation[0].pause();
  }
}