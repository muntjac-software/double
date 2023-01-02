import {Difficulty} from "../app/models/difficulty";

export const environment = {

  difficultyInfo: {
    [Difficulty.RECRUIT.valueOf()]  : 'For those new to -le games',
    [Difficulty.REGULAR.valueOf()]  : 'For regular -le game players',
    [Difficulty.HARDENED.valueOf()] : 'For experienced -le game players',
    [Difficulty.VETERAN.valueOf()]  : 'You will not survive'
  },
  difficulties: [Difficulty.RECRUIT, Difficulty.REGULAR, Difficulty.HARDENED, Difficulty.VETERAN],

  messageSuccess: 'You\'re not as green as you are cabbage looking',
  resultSuccess: '🧠 🧮 🗡️ :: [RECRUIT] [🟢🟢🟢🟢🟢🟢🟢] [5s]',

  tagLine: 'a game to keep your mental maths sharp',
  title: 'double',
  urlGitHub: 'https://github.com/muntjac-software/double'

};
