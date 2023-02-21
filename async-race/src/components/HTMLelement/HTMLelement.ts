export class HTMLelement {
  tagPrnt: HTMLElement;

  constructor(parentNode: HTMLElement, tag: keyof HTMLElementTagNameMap = 'div', styles: string[] = [], content = '') {
    this.tagPrnt = document.createElement(tag);
    this.tagPrnt.classList.add(...styles);
    this.tagPrnt.textContent = content;

    if (parentNode) {
      parentNode.append(this.tagPrnt);
    }
  }
  delete(): void {
    this.tagPrnt.remove();
  }
}
