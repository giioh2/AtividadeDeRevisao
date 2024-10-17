import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { handleGame } from '../controllers/GameController';

export default function GameScreen() {
  const [userChoice, setUserChoice] = useState(null);
  const [appChoice, setAppChoice] = useState(null);
  const [result, setResult] = useState(null);

  const onPlay = (choice) => {
    setUserChoice(choice);
    handleGame(choice, setAppChoice, setResult);
  };

  const resetGame = () => {
    setUserChoice(null);
    setAppChoice(null);
    setResult(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedra, Papel e Tesoura</Text>

      <View style={styles.choicesContainer}>
        <TouchableOpacity onPress={() => onPlay('Pedra')}>
          <Image style={styles.image} source={require('../../Resourcer/pedra.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPlay('Papel')}>
          <Image style={styles.image} source={require('../../Resourcer/papel.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPlay('Tesoura')}>
          <Image style={styles.image} source={require('../../Resourcer/tesoura.png')} />
        </TouchableOpacity>
      </View>

      {userChoice && appChoice && result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Você escolheu: {userChoice}</Text>
          <Text style={styles.resultText}>App escolheu: {appChoice}</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}

      <Button title="Jogar Novamente" onPress={resetGame} />
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
  choicesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  resultContainer: {
    marginVertical: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
