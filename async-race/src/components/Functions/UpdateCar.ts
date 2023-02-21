export function setColorToInput(color: string, name: string) {
  const parent = (document.querySelector('.control') as HTMLDivElement).childNodes[1] as HTMLDivElement;
  const colorInput = parent.childNodes[1] as HTMLInputElement;
  const colorText = parent.childNodes[0] as HTMLInputElement;
  colorInput.value = color;
  colorText.value = name;
}
