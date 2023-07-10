import { removeWinLevels } from "./win-level";
import { FIRST_LEVEL } from "./const";
import { createLevel, removeLevel } from "./create-elements";

const input: HTMLInputElement | null = document.querySelector('.input');
const plants: HTMLElement | null = document.querySelector('.plants');


const winPanel = document.createElement('div');
const newGame = document.createElement('div');

const addWin = () => {
    winPanel.className = 'win-panel';
    winPanel.textContent = 'You win!';
    newGame.className = 'reset new-game';
    newGame.textContent = 'New game';
    (plants as HTMLElement).before(winPanel);
    winPanel.append(newGame);
}

const removeWin = () => {
    winPanel.remove();
}

const resetGame = () => {
    localStorage.clear();
    removeLevel();
    createLevel(FIRST_LEVEL);
    localStorage.setItem('game', FIRST_LEVEL.toString());
    (input as HTMLInputElement).value = '';
    (input as HTMLInputElement).classList.add('input-background');
    removeWin();
    removeWinLevels();
}

(newGame as HTMLElement).addEventListener('click', resetGame);

export {addWin, removeWin, resetGame}