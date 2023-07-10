import { LevelType } from "../types/types";

const title = document.querySelector('.panel-title');

export const createPanelTitle = (id: LevelType['id']): void => {
    (title as HTMLElement).textContent = `Level ${id} of 10`
};

export const createPanelHelp = (help: LevelType['help']): string => {
    return `
<div class="help">
    <h2 class="help-selector">${help[0]}</h2>
    <h2 class="help-title">${help[1]}</h2>
    <p class="syntax">${help[2]}</p>
    <p class="description">${help[3]}</p>
</div>
`;
}

export const createPanelExamples = (examples: LevelType['examples']): string => {
    return `
<div class="examples">
    <h2 class="examples-title">Examples</h2>
    <ul>
    <li>${examples[0]}</li>
    ${!examples[1] ? '' : `<li>${examples[1]}</li>`}
    </ul>
</div>
`;
}