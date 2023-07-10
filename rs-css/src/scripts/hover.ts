import { EventMouse } from "../types/types";
import { Colors, HoverElements, StrokeWidth, TRANSITION } from "./const";
import { addClue, removeClue } from "./clue";

const markup: HTMLElement | null = document.querySelector('.markup-code');
const game: HTMLElement | null = document.querySelector('.game');
const useElements: HTMLCollection = (game as HTMLElement).getElementsByTagName('use');
const tags: HTMLCollection = (markup as HTMLElement).getElementsByTagName('div');

const setDataAttribute = (selector: HTMLCollection): void => {
    Array.from(selector).forEach((el, i): void => {
        (el as HTMLElement).setAttribute('data-active', i.toString())
    })
};

const addHover = (selector: HTMLElement, svg: HTMLElement) => {
    (selector as HTMLElement).style.color = Colors.GREEN;
    (svg as HTMLElement).style.stroke = Colors.WHITE;
    (svg as HTMLElement).style.strokeWidth = StrokeWidth.BOLD;
    (svg as HTMLElement).style.transition = TRANSITION;
    addClue<HTMLElement>(selector);
}

const removeHover = (selector: HTMLElement, svg: HTMLElement) => {
    (selector as HTMLElement).style.color = Colors.BLACK;
    (svg as HTMLElement).style.stroke = Colors.BLACK;
    (svg as HTMLElement).style.strokeWidth = StrokeWidth.THIN;
    removeClue<HTMLElement>(svg);
}

const changeSvg = (el: HTMLElement, state: string): void => {
    if ((el as HTMLElement).dataset.active) {
        const activeSvg: HTMLElement | null = (game as HTMLElement).querySelector(`[data-active='${el.dataset.active}']`);

        switch (state) {
            case EventMouse.Mouseover:
                (el as HTMLElement).classList.add('active');
                addHover((el as HTMLElement), (activeSvg as HTMLElement));
                break;
            case EventMouse.Mouseout:
                (el as HTMLElement).classList.remove('active');
                removeHover((el as HTMLElement), (activeSvg as HTMLElement));
                break;
        }
    }

}

const changeSelector = (el: HTMLElement, state: string): void => {
    if ((el as HTMLElement).tagName === HoverElements.USE) {
        const activeSelector: HTMLElement | null = (markup as HTMLElement).querySelector(`[data-active='${(el as HTMLElement).dataset.active}']`);

        switch (state) {
            case EventMouse.Mouseover:
                addHover((activeSelector as HTMLElement), (el as HTMLElement));
                break;

            case EventMouse.Mouseout:
                removeHover((activeSelector as HTMLElement), (el as HTMLElement));
                break;
        }
    }
}

(markup as HTMLElement).addEventListener(EventMouse.Mouseover, (e: Readonly<Event>): void => {
    changeSvg(e.target as HTMLElement, EventMouse.Mouseover);
});

(markup as HTMLElement).addEventListener(EventMouse.Mouseout, (e: Readonly<Event>): void => {
    changeSvg(e.target as HTMLElement, EventMouse.Mouseout);
});

(game as HTMLElement).addEventListener(EventMouse.Mouseover, (e: Readonly<Event>): void => {
    changeSelector(e.target as HTMLElement, EventMouse.Mouseover)
});
(game as HTMLElement).addEventListener(EventMouse.Mouseout, (e: Readonly<Event>): void => {
    changeSelector(e.target as HTMLElement, EventMouse.Mouseout)
});


setDataAttribute(useElements);
setDataAttribute(tags);

export {setDataAttribute}