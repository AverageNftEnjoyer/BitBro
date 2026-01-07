import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import { AppBackground } from '../../src/ui/AppBackground';
import { colors } from '../../src/ui/theme';

export default function ProfileScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.replace('/');
  };

  return (
    <AppBackground>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>PW</Text>
            </View>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>Lvl 8</Text>
            </View>
          </View>

          <Text style={styles.username}>PixelWarrior_99</Text>
          <Text style={styles.email}>{user?.email || 'user@example.com'}</Text>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>47</Text>
              <Text style={styles.statLabel}>Workouts</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>9.3K</Text>
              <Text style={styles.statLabel}>Total XP</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Achievements</Text>
            <View style={styles.achievementRow}>
              <Text style={styles.achievementBadge}>🔥</Text>
              <Text style={styles.achievementText}>7-Day Streak</Text>
            </View>
            <View style={styles.achievementRow}>
              <Text style={styles.achievementBadge}>💪</Text>
              <Text style={styles.achievementText}>First Workout</Text>
            </View>
            <View style={styles.achievementRow}>
              <Text style={styles.achievementBadge}>⭐</Text>
              <Text style={styles.achievementText}>Level 5 Reached</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Settings</Text>
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>Edit Profile</Text>
            </Pressable>
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>Notifications</Text>
            </Pressable>
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>Privacy</Text>
            </Pressable>
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>Help & Support</Text>
            </Pressable>
          </View>

          <Pressable style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
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
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.accentMuted,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.accent,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.accent,
  },
  levelBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: colors.accent,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.bg,
  },
  username: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.accent,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
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
  achievementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  achievementBadge: {
    fontSize: 24,
    marginRight: 12,
  },
  achievementText: {
    fontSize: 16,
    color: '#ffffff',
  },
  menuItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.06)',
  },
  menuText: {
    fontSize: 16,
    color: '#ffffff',
  },
  logoutButton: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 100, 100, 0.3)',
    backgroundColor: 'rgba(255, 100, 100, 0.1)',
    alignItems: 'center',
    marginTop: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ff6464',
  },
});
