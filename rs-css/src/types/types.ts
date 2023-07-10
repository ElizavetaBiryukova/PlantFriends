export interface LevelType {
    id: number,
    title: string,
    plants: number,
    flowers: number,
    colorFlowers: Array<string>,
    markup: Array<string | Array<string>>,
    animation: Array<string>,
    help: Array<string>,
    examples: Array<string>,
    answer: string,
}

export enum EventMouse {
    Mouseover = 'mouseover',
    Mouseout = 'mouseout',
}