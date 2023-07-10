const plants: HTMLElement | null = document.querySelector('.plants');

const addClue = <T extends { textContent?: string | null }>(el: T): void => {
    const clue = document.createElement('div');

    clue.className = 'clue-text';
    clue.textContent = `${el.textContent}`;
    (plants as HTMLElement).prepend(clue);
}

const removeClue = <T>(el: T): void => {
    const clueText = (document.querySelector('.clue-text') as HTMLElement);

    (el as HTMLElement).classList.remove('clue');
    clueText.remove();
}

export {addClue, removeClue}