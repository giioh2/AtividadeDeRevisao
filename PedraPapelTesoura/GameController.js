import { generateAppChoice, determineWinner } from '../models/GameModel';

export const handleGame = (userChoice, setAppChoice, setResult) => {
  const appChoice = generateAppChoice();
  const result = determineWinner(userChoice, appChoice);

  setAppChoice(appChoice);
  setResult(result);
};
