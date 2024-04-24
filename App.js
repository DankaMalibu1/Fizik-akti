import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExerciseApp from './ExerciseApp'; // Importuojame mūsų sukurtą pratimų programos komponentą

export default function App() {
  return (
    <View style={styles.container}>
      <ExerciseApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
