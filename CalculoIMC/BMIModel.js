
export const calculateBMI = (weight, height) => {
    if (!weight || !height) return null;
  
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
  
    if (isNaN(weightNum) || isNaN(heightNum) || heightNum <= 0) {
      return null;
    }
  
    const bmi = weightNum / (heightNum * heightNum);
    return bmi.toFixed(2);
  };
  
  export const getBMIClassification = (bmi) => {
    if (bmi < 18.5) {
      return 'Abaixo do peso';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Peso normal';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Sobrepeso';
    } else if (bmi >= 30 && bmi < 39.9) {
      return 'Obesidade';
    } else {
      return 'Obesidade grave';
    }
  };
  