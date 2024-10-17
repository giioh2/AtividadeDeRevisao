import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { handleFuelCalculation } from '../controllers/FuelController';

export default function FuelScreen() {
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [result, setResult] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Álcool ou Gasolina?</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool (R$)"
        keyboardType="numeric"
        value={alcoholPrice}
        onChangeText={setAlcoholPrice}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina (R$)"
        keyboardType="numeric"
        value={gasolinePrice}
        onChangeText={setGasolinePrice}
      />
      
      <Button title="Calcular" onPress={() => handleFuelCalculation(alcoholPrice, gasolinePrice, setResult)} />
      

      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}

      
      <Image
        style={styles.image}
        source={require('../../Resourcer/combustivel.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  resultContainer: {
    marginVertical: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
});
