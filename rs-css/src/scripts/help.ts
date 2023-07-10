import { levels } from "../scripts/levels";

const help: HTMLElement | null = document.querySelector('.help-button');
const input: HTMLInputElement | null = document.querySelector('.input');

(help as HTMLElement).addEventListener('click', () => {
    (input as HTMLInputElement).value = levels[Number(localStorage.getItem('game'))].answer;
})