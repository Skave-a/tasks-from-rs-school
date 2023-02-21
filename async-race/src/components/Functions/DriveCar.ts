export function driveCar(time: number, car: HTMLElement) {
  const road = [{ left: '100px' }, { left: `calc(100% - 70px)` }];
  const anim = {
    duration: time,
    iterations: 1,
  };
  const element = car;
  const animation = element.animate(road, anim);
  animation.play();
  animation.onfinish = () => {
    element.style.left = `calc(100% - 70px)`;
  };
}
