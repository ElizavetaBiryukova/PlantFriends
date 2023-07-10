import { levels } from "../scripts/levels";
import { createPlantsElement } from "../components/plants";
import { createMarkup } from "../components/markup";
import { createPanelExamples, createPanelHelp, createPanelTitle } from "../components/panel";
import { addAnimation } from "./animation";
import { setDataAttribute } from "./hover";
import { LAST_LEVEL, FIRST_LEVEL } from "./const";
import { removeColorForLevel, addWinLevel } from "./win-level";

const title: HTMLElement | null = document.querySelector('.title')
const plantsElement: HTMLElement | null = document.querySelector('.plants');
const markup: HTMLElement | null = document.querySelector('.markup-code');
const textPanel: HTMLElement | null = document.querySelector('.text');
const game: HTMLElement | null = document.querySelector('.game');
const useElements: HTMLCollection = (game as HTMLElement).getElementsByTagName('use');
const tags: HTMLCollection = (markup as HTMLElement).getElementsByTagName('div');


const createLevel = (levelNumber: number) => {
    if (levelNumber > LAST_LEVEL) {
        localStorage.setItem('game', FIRST_LEVEL.toString());
        createLevel(FIRST_LEVEL);
    } else {
        const flowers = new Array(levels[levelNumber].plants - levels[levelNumber].flowers).fill(0).concat(Array.from({ length: levels[levelNumber].flowers }, (_, index) => index + 1));
        (plantsElement as HTMLElement).insertAdjacentHTML('afterbegin', createPlantsElement(levels[levelNumber].plants, flowers, levels[levelNumber].colorFlowers));
        (title as HTMLElement).textContent = `${levels[levelNumber].title}`;
        (markup as HTMLElement).insertAdjacentHTML('afterbegin', createMarkup(levels[levelNumber].markup));
        createPanelTitle(levels[levelNumber].id + 1);
        (textPanel as HTMLElement).insertAdjacentHTML('afterbegin', createPanelExamples(levels[levelNumber].examples));
        (textPanel as HTMLElement).insertAdjacentHTML('afterbegin', createPanelHelp(levels[levelNumber].help));
        addAnimation(levelNumber);
        setDataAttribute(useElements);
        setDataAttribute(tags);
        addWinLevel(levelNumber);
    }
}

const removeLevel = () => {
    (plantsElement as HTMLElement).classList.remove('win');
    (plantsElement as HTMLElement).replaceChildren();
    (markup as HTMLElement).replaceChildren();
    (textPanel as HTMLElement).replaceChildren();
    removeColorForLevel();
}

createLevel(Number(localStorage.getItem('game')));

export { createLevel, removeLevel }