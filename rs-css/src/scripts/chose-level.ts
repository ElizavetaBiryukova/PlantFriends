import { createLevel, removeLevel } from "./create-elements";
import { FIRST_LEVEL, LAST_LEVEL } from "./const";
import { resetGame } from "./win-game";

const levels: HTMLElement | null = document.querySelector('.levels');
const reset: HTMLElement | null = document.querySelector('.reset');
const input: HTMLInputElement | null = document.querySelector('.input');
const next: HTMLElement | null = document.querySelector('.next');
const prev: HTMLElement | null = document.querySelector('.prev');

let levelNumber = Number(localStorage.getItem('game'));

const changeLevel = (el: string): void => {
    removeLevel();
    (input as HTMLInputElement).value = '';
    (input as HTMLInputElement).classList.add('input-background');
    localStorage.removeItem('game');
    localStorage.setItem('game', `${el}`);
    createLevel(Number(localStorage.getItem('game')));
}

(levels as HTMLElement).addEventListener('click', (e: Readonly<Event>): void => {
    changeLevel(`${(e.target as HTMLElement).id}`);
});

(reset as HTMLElement).addEventListener('click', resetGame);

(next as HTMLElement).addEventListener('click', (): void => {
    if (localStorage.getItem('game') == LAST_LEVEL.toString()) return;
    removeLevel();
    localStorage.setItem('game', `${levelNumber++}`);
    changeLevel(`${Number(localStorage.getItem('game')) + 1}`);
});

(prev as HTMLElement).addEventListener('click', (): void => {
    if (localStorage.getItem('game') == FIRST_LEVEL.toString()) return;
    removeLevel();
    localStorage.setItem('game', `${levelNumber--}`);
    changeLevel(`${Number(localStorage.getItem('game')) - 1}`);
});

export {changeLevel}