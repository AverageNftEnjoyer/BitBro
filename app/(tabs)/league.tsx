import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppBackground } from '../../src/ui/AppBackground';
import { colors } from '../../src/ui/theme';

export default function LeagueScreen() {
  const leaderboard = [
    { rank: 1, name: 'TurboKai', xp: 12450, badge: '🥇' },
    { rank: 2, name: 'Alyx_Z', xp: 11200, badge: '🥈' },
    { rank: 3, name: 'FitNinja42', xp: 10890, badge: '🥉' },
    { rank: 4, name: 'PixelWarrior_99', xp: 9340, badge: '4' },
    { rank: 5, name: 'GymRat2024', xp: 8720, badge: '5' },
  ];

  return (
    <AppBackground>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.icon}>🏆</Text>
          <Text style={styles.title}>BitLeague</Text>
          <Text style={styles.subtitle}>CyberGym Crew Rankings</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>This Week's Leaderboard</Text>
            {leaderboard.map((player) => (
              <View key={player.rank} style={styles.leaderRow}>
                <Text style={styles.rankBadge}>{player.badge}</Text>
                <Text style={[styles.playerName, player.rank === 4 && styles.currentUser]}>
                  {player.name}
                </Text>
                <Text style={styles.playerXp}>{player.xp.toLocaleString()} XP</Text>
              </View>
            ))}
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Your Stats</Text>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Current Rank</Text>
              <Text style={styles.statValue}>#4</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Weekly XP</Text>
              <Text style={styles.statValue}>9,340</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>To Next Rank</Text>
              <Text style={styles.statValue}>1,550 XP</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Crew Activity</Text>
            <Text style={styles.cardText}>🔥 TurboKai completed a 2-hour session</Text>
            <Text style={styles.cardText}>⬆️ Alyx_Z moved up to #2</Text>
            <Text style={styles.cardText}>🎉 FitNinja42 hit a new PR</Text>
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
    marginBottom: 16,
  },
  cardText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 8,
  },
  leaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.06)',
  },
  rankBadge: {
    fontSize: 20,
    width: 36,
    textAlign: 'center',
  },
  playerName: {
    flex: 1,
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  currentUser: {
    color: colors.accent,
  },
  playerXp: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  statLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  statValue: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '700',
  },
});
