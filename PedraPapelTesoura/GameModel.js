export const generateAppChoice = () => {
    const options = ['Pedra', 'Papel', 'Tesoura'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
  };
  
  export const determineWinner = (userChoice, appChoice) => {
    if (userChoice === appChoice) {
      return 'Empate';
    }
  
    if (
      (userChoice === 'Pedra' && appChoice === 'Tesoura') ||
      (userChoice === 'Tesoura' && appChoice === 'Papel') ||
      (userChoice === 'Papel' && appChoice === 'Pedra')
    ) {
      return 'Você ganhou!';
    }
  
    return 'Você perdeu!';
  };
  