import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import ExerciseDetails from './ExerciseDetails';
import ExerciseCounter from './ExerciseCounter'; // Importuojame naują komponentą

const exercises = [
  { id: 1, name: 'Plankas', description: 'Laikykite planką 30 sekundžių', duration: 30 },
  { id: 2, name: 'Šupsnys', description: 'Atlikite 15 šuksnių', duration: 0 },
  { id: 3, name: 'Pritūpimai', description: 'Atlikite 10 pritūpimų', duration: 0 },
  // Pridėti daugiau pratimų
];

export default function ExerciseApp() {
  const [completedExercises, setCompletedExercises] = useState([]);
  const [selectedExerciseId, setSelectedExerciseId] = useState(null);

  const startExercise = (id) => {
    setSelectedExerciseId(id);
  };

  const closeExerciseDetails = () => {
    setSelectedExerciseId(null);
  };

  const handleExerciseCount = (count) => {
    const updatedExercises = [...completedExercises];
    updatedExercises.push({ id: selectedExerciseId, count });
    setCompletedExercises(updatedExercises);
  };

  const renderExercises = () => {
    return exercises.map(exercise => (
      <TouchableOpacity
        key={exercise.id}
        style={styles.exerciseCard}
        onPress={() => startExercise(exercise.id)}
      >
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseDescription}>{exercise.description}</Text>
      </TouchableOpacity>
    ));
  };

  if (selectedExerciseId) {
    const selectedExercise = exercises.find(exercise => exercise.id === selectedExerciseId);
    return (
      <ExerciseCounter 
        exercise={selectedExercise} 
        onClose={closeExerciseDetails} 
        onCount={handleExerciseCount} 
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pratimų programa</Text>
      <ScrollView contentContainerStyle={styles.exerciseList}>
        {renderExercises()}
      </ScrollView>
      <Text style={styles.completedText}>Atlikti pratimai: {completedExercises.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  exerciseList: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseCard: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  exerciseDescription: {
    fontSize: 16,
  },
  completedText: {
    fontSize: 18,
    marginTop: 20,
  },
});
