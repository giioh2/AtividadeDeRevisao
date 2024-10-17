import { calculateBMI, getBMIClassification } from '../models/BMIModel';

export const handleBMICalculation = (weight, height, setResult) => {
  const bmi = calculateBMI(weight, height);

  if (bmi) {
    const classification = getBMIClassification(bmi);
    setResult({
      bmi,
      classification,
    });
  } else {
    setResult(null);
  }
};
