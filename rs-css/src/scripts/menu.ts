const burger: HTMLElement | null = document.querySelector('.burger');
const cross: HTMLElement | null = document.querySelector('.cross');
const menu: HTMLElement | null = document.querySelector('.menu');
const panel: HTMLElement | null = document.querySelector('.panel-main');

(burger as HTMLElement).addEventListener('click', (): void => {
    (menu as HTMLElement).classList.remove('menu');
    (panel as HTMLElement).classList.add('panel-close')
});

(cross as HTMLElement).addEventListener('click', (): void => {
    (menu as HTMLElement).classList.add('menu');
    (panel as HTMLElement).classList.remove('panel-close')
});