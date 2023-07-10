import { LevelType } from "../types/types";

export const createMarkup = (markup: LevelType['markup']): string => {
    return markup.map((el) => {
        if (typeof el === 'string') {
            return `<div>    ${el.replace('<', '&lt;').replace('>', '&gt;')}</div>`
        } else {
            return `&lt;plants&gt${el.map((item) => `<div>    ${item.replace('<', '&lt;').replace('>', '&gt;')}</div>`).join('')}&lt;plants/&gt<br>`
        }
    }).join('');
}
