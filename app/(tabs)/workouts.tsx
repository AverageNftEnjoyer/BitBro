import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppBackground } from '../../src/ui/AppBackground';
import { colors } from '../../src/ui/theme';

export default function WorkoutsScreen() {
  return (
    <AppBackground>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.icon}>🏋️</Text>
          <Text style={styles.title}>Workouts</Text>
          <Text style={styles.subtitle}>Your training hub</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Recent Workouts</Text>
            <Text style={styles.cardText}>No workouts yet. Start your first session!</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Suggested For You</Text>
            <Text style={styles.cardText}>Full Body Blast - 45 min</Text>
            <Text style={styles.cardText}>HIIT Cardio - 20 min</Text>
            <Text style={styles.cardText}>Core Crusher - 15 min</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Browse Library</Text>
            <Text style={styles.cardText}>500+ workouts available</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 120,
  },
  icon: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 32,
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.accent,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 6,
  },
});
