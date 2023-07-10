const levelsList: NodeList = document.querySelectorAll('.level');

const levelsArray = Array.from(levelsList);

const addWinLevel = (levelNumber: number): void => {
    levelsArray.map((el) => {
        if ((el as HTMLElement).id === levelNumber.toString()) {
            (el as HTMLElement).classList.add('color-levels');
        }
    })

    if (localStorage.getItem(`${levelNumber}`)) {
        levelsArray.map((el) => {
            if ((el as HTMLElement).id === (levelNumber - 1).toString()) {
                (el as HTMLElement).classList.add('levels-win');
            }
        })
    }
}

const removeWinLevels = () => {
    levelsArray.map((el) => {
        (el as HTMLElement).classList.remove('levels-win');
    })
}

const removeColorForLevel = () => {
    levelsArray.map((el) => {
        (el as HTMLElement).classList.remove('color-levels');
    })
}

export { addWinLevel, removeWinLevels, removeColorForLevel}