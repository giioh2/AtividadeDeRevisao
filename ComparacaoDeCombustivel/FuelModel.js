
export const calculateFuelChoice = (alcoholPrice, gasolinePrice) => {
    if (!alcoholPrice || !gasolinePrice) return null;
  
    const alcoholNum = parseFloat(alcoholPrice);
    const gasolineNum = parseFloat(gasolinePrice);
  
    if (isNaN(alcoholNum) || isNaN(gasolineNum) || gasolineNum <= 0) {
      return null;
    }
  
    const ratio = alcoholNum / gasolineNum;
    return ratio < 0.7 ? 'Álcool' : 'Gasolina';
  };
  