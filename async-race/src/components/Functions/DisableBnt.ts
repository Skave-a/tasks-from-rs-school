import { btnsDisable } from '../utils/constants';

export function disableBntSelect() {
  const btn = document.querySelectorAll('.control-input')[1] as HTMLButtonElement;
  btnsDisable.select ? (btn.disabled = true) : (btn.disabled = false);
}

export function disableBntPlay(btn: HTMLButtonElement) {
  btnsDisable.play ? (btn.disabled = true) : (btn.disabled = false);
}

export function disableBntStop(btn: HTMLButtonElement) {
  btnsDisable.stop ? (btn.disabled = false) : (btn.disabled = true);
}

export function disableBntReset() {
  const btn = document.querySelector('.button__reset') as HTMLButtonElement;
  btnsDisable.reset ? (btn.disabled = true) : (btn.disabled = false);
}
