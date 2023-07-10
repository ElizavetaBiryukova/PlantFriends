import { levels } from "../scripts/levels";
import { changeLevel } from "./chose-level";
import { addWin } from "./win-game";

const input: HTMLInputElement | null = document.querySelector('.input');
const button: HTMLElement | null = document.querySelector('.enter-button');
const editor: HTMLElement | null = document.querySelector('.editor');
const plants: HTMLElement | null = document.querySelector('.plants');

(input as HTMLInputElement).focus();

(input as HTMLInputElement).addEventListener('input', () => {
    (input as HTMLInputElement).classList.remove('input-background');
});

const checkInput = () => {
    let levelNumber = Number(localStorage.getItem('game'));
    (editor as HTMLElement).classList.remove('shaking');
    const result = (input as HTMLInputElement).value;
    if (result === levels[Number(localStorage.getItem('game'))].answer) {
        (plants as HTMLElement).classList.add('win');
        localStorage.setItem('game', `${levelNumber++}`);
        setTimeout(() => changeLevel(`${Number(localStorage.getItem('game')) + 1}`), 300);
        localStorage.setItem(`${levelNumber}`, 'win');
        if (localStorage.length > 10) addWin();
    } else {
        (editor as HTMLElement).classList.add('shaking');
        setTimeout(() => (editor as HTMLElement).classList.remove('shaking'), 1000);
    }
}

const keydownEnter = (e: Readonly<KeyboardEvent>) => {
    if (e.code === 'Enter') {
        checkInput();
    }
}

(input as HTMLInputElement).addEventListener('keydown', keydownEnter);
(button as HTMLElement).addEventListener('click', checkInput);
