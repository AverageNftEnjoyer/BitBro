import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewWorkoutScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Text style={styles.icon}>⚡</Text>
          <Text style={styles.title}>Start Workout</Text>
          <Text style={styles.subtitle}>Choose how you want to train</Text>

          <Pressable style={styles.optionCard}>
            <Text style={styles.optionIcon}>🎯</Text>
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Quick Start</Text>
              <Text style={styles.optionDesc}>Jump into a random workout</Text>
            </View>
          </Pressable>

          <Pressable style={styles.optionCard}>
            <Text style={styles.optionIcon}>📋</Text>
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Follow a Plan</Text>
              <Text style={styles.optionDesc}>Continue your program</Text>
            </View>
          </Pressable>

          <Pressable style={styles.optionCard}>
            <Text style={styles.optionIcon}>✏️</Text>
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Custom Workout</Text>
              <Text style={styles.optionDesc}>Build your own session</Text>
            </View>
          </Pressable>

          <Pressable style={styles.optionCard}>
            <Text style={styles.optionIcon}>📊</Text>
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Log Activity</Text>
              <Text style={styles.optionDesc}>Record a past workout</Text>
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0f',
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  icon: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#00d4ff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 32,
  },
  optionCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 212, 255, 0.08)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 212, 255, 0.2)',
  },
  optionIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  optionText: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  optionDesc: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.5)',
  },
});
