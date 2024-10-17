import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { handleBMICalculation } from '../controllers/BMIController';

export default function BMIScreen() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo do IMC</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      
      <Button title="Calcular IMC" onPress={() => handleBMICalculation(weight, height, setResult)} />
      
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Seu IMC: {result.bmi} - {result.classification}
          </Text>
        </View>
      )}

      <Image
        style={styles.image}
        source={require('../../Resourcer/balanca.png')} 
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
