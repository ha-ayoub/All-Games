import { RESULT_TYPES, WIN_CONDITIONS, type Choice, type ResultType } from './constants'

export const getRandomChoice = (choices: Choice[]): Choice => {
    return choices[Math.floor(Math.random() * choices.length)]
}

export const determineWinner = (playerChoice: Choice, computerChoice: Choice): ResultType  => {
    if (playerChoice.id === computerChoice.id)
        return RESULT_TYPES.DRAW;

    const playerWins = WIN_CONDITIONS[playerChoice.id as keyof typeof WIN_CONDITIONS] === computerChoice.id;

    return playerWins ? RESULT_TYPES.PLAYER : RESULT_TYPES.COMPUTER;

}