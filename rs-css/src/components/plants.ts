import { LevelType } from "../types/types";
import { FIRST_ELEMENT } from "../scripts/const";

const createPlant = (numberPlant: number, numberFlower: number, color: string): string => {
    if (numberFlower === FIRST_ELEMENT) {
        return `
    <svg class="plant plant-${numberPlant}">
    <use class="pot pot-${numberPlant}" xlink:href="#pot"></use>
    </svg>
    `
    }
    return `
    <svg class="plant plant-${numberPlant}">
    <use class="flower flower-${numberFlower}" xlink:href="#${color==='pink' ? 'pinkFlower' : 'flower'}"></use>
    <use class="pot pot-${numberPlant}" xlink:href="#pot"></use>
    </svg>
    `
}

export const createPlantsElement = (plants: LevelType['plants'], flowers: Array<number>, colors: Array<string>): string => {
    let element: string = createPlant(1, flowers[FIRST_ELEMENT], colors[FIRST_ELEMENT]);
    for (let i = 1; i < plants; i++) {
        element = element + `${createPlant(i + 1, flowers[i], colors[i])}`;
    }

    return element;
}
