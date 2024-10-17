import { calculateFuelChoice } from '../models/FuelModel';

export const handleFuelCalculation = (alcoholPrice, gasolinePrice, setResult) => {
  const choice = calculateFuelChoice(alcoholPrice, gasolinePrice);

  if (choice) {
    setResult(`Abasteça com ${choice}`);
  } else {
    setResult(null);
  }
};
