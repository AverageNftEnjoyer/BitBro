import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { colors } from './theme';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const GRID_SIZE = 24;
const GRID_COLS = Math.ceil(SCREEN_WIDTH / GRID_SIZE) + 1;
const GRID_ROWS = Math.ceil(SCREEN_HEIGHT / GRID_SIZE) + 1;

interface AppBackgroundProps {
  children: React.ReactNode;
}

export function AppBackground({ children }: AppBackgroundProps) {
  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {Array.from({ length: GRID_COLS }).map((_, i) => (
          <View
            key={`v-${i}`}
            style={[styles.gridLineVertical, { left: i * GRID_SIZE }]}
          />
        ))}
        {Array.from({ length: GRID_ROWS }).map((_, i) => (
          <View
            key={`h-${i}`}
            style={[styles.gridLineHorizontal, { top: i * GRID_SIZE }]}
          />
        ))}
      </View>

      <View style={styles.vignetteTop} />
      <View style={styles.vignetteBottom} />
      <View style={styles.vignetteLeft} />
      <View style={styles.vignetteRight} />

      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  gridContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  gridLineVertical: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: colors.grid,
  },
  gridLineHorizontal: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: colors.grid,
  },
  vignetteTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'rgba(11, 13, 18, 0.8)',
  },
  vignetteBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'rgba(11, 13, 18, 0.8)',
  },
  vignetteLeft: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 40,
    backgroundColor: 'rgba(11, 13, 18, 0.6)',
  },
  vignetteRight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 40,
    backgroundColor: 'rgba(11, 13, 18, 0.6)',
  },
  content: {
    flex: 1,
  },
});
