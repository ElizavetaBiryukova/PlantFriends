import { levels } from "../scripts/levels"

const addAnimation = (levelNumber: number): void => {
    const levelsArray = levels[levelNumber].animation;
    levelsArray.forEach((el: string) => {
        const animationElement = document.querySelector(el);
            (animationElement as HTMLElement).classList.add('animation')
    })
}

export {addAnimation}