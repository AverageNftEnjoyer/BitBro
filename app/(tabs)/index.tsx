import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import { AppBackground } from '../../src/ui/AppBackground';
import { colors } from '../../src/ui/theme';

const { width } = Dimensions.get('window');

const avatar = require('../../assets/avatar.png');

export default function HomeScreen() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.replace('/');
  };

  const progressPercent = (1240 / 2000) * 100;

  return (
    <AppBackground>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <View style={styles.avatarContainer}>
                <Image source={avatar} style={styles.avatar} />
                <View style={styles.avatarGlow} />
              </View>
              <View style={styles.headerText}>
                <Text style={styles.welcomeText}>Welcome back,</Text>
                <Text style={styles.username}>PixelWarrior_99</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.notificationButton} onPress={handleLogout}>
              <Text style={styles.bellIcon}>🔔</Text>
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>

          <View style={styles.dailyGoalCard}>
            <View style={styles.dailyGoalGlow} />
            <View style={styles.dailyGoalHeader}>
              <Text style={styles.dailyGoalLabel}>DAILY GOAL</Text>
              <View style={styles.streakBadge}>
                <Text style={styles.streakText}>🔥 12 Day Streak</Text>
              </View>
            </View>
            <Text style={styles.xpText}>1,240 / 2,000 XP</Text>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
                <View style={[styles.progressBarGlow, { width: `${progressPercent}%` }]} />
              </View>
            </View>
            <Text style={styles.motivationText}>
              You're crushing it! Just 760 XP to next level.
            </Text>
            <TouchableOpacity style={styles.quickWorkoutButton}>
              <Text style={styles.quickWorkoutText}>▶ Quick Workout</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>AI Coach Recommendations</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recommendationCard}>
            <View style={styles.recommendationGlow} />
            <View style={styles.recommendationContent}>
              <View style={styles.recommendationIcon}>
                <Text style={styles.robotEmoji}>🤖</Text>
              </View>
              <View style={styles.recommendationTextContainer}>
                <Text style={styles.recommendationTitle}>Leg Day Recovery</Text>
                <Text style={styles.recommendationBody}>
                  Based on yesterday's intensity, try this 15-min mobility flow to optimize recovery and prevent soreness.
                </Text>
                <TouchableOpacity style={styles.startSessionButton}>
                  <Text style={styles.startSessionText}>Start Session →</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's Stats</Text>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <View style={styles.statCardGlow} />
              <Text style={styles.statEmoji}>❤️</Text>
              <Text style={styles.statLabel}>AVG HEART RATE</Text>
              <Text style={styles.statValue}>124 bpm</Text>
            </View>
            <View style={styles.statCard}>
              <View style={styles.statCardGlow} />
              <Text style={styles.statEmoji}>⏱</Text>
              <Text style={styles.statLabel}>ACTIVE TIME</Text>
              <Text style={styles.statValue}>45 min</Text>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>BitLeague Updates</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>CyberGym Crew</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.feedContainer}>
            <View style={styles.feedItem}>
              <View style={styles.feedAvatarSmall}>
                <Text style={styles.feedAvatarText}>TK</Text>
              </View>
              <View style={styles.feedContent}>
                <Text style={styles.feedText}>
                  <Text style={styles.feedUsername}>TurboKai</Text> just finished HIIT Blast
                </Text>
                <View style={styles.feedMeta}>
                  <Text style={styles.xpGain}>+350 XP</Text>
                  <Text style={styles.feedTime}>2 mins ago</Text>
                </View>
              </View>
            </View>

            <View style={styles.feedItem}>
              <View style={styles.feedAvatarSmall}>
                <Text style={styles.feedAvatarText}>AZ</Text>
              </View>
              <View style={styles.feedContent}>
                <Text style={styles.feedText}>
                  <Text style={styles.feedUsername}>Alyx_Z</Text> leveled up to Lvl 12!
                </Text>
                <View style={styles.feedMeta}>
                  <Text style={styles.feedReaction}>👍</Text>
                  <Text style={styles.feedTime}>15 mins ago</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.bottomSpacer} />
        </ScrollView>
      </SafeAreaView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    width: 52,
    height: 52,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: colors.accent,
  },
  avatarGlow: {
    position: 'absolute',
    top: -4,
    left: -4,
    right: -4,
    bottom: -4,
    borderRadius: 30,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.accentGlow,
  },
  headerText: {
    marginLeft: 14,
  },
  welcomeText: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 2,
  },
  username: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  notificationButton: {
    position: 'relative',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIcon: {
    fontSize: 20,
  },
  notificationDot: {
    position: 'absolute',
    top: 10,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff4757',
    borderWidth: 1.5,
    borderColor: '#0a0a0f',
  },
  dailyGoalCard: {
    backgroundColor: colors.accentMuted,
    borderRadius: 24,
    padding: 24,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: colors.accentGlow,
    position: 'relative',
    overflow: 'hidden',
  },
  dailyGoalGlow: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: colors.accentGlow,
  },
  dailyGoalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dailyGoalLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.accent,
    letterSpacing: 2,
  },
  streakBadge: {
    backgroundColor: 'rgba(255, 165, 0, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 165, 0, 0.3)',
  },
  streakText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ffa500',
  },
  xpText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 16,
    letterSpacing: 1,
  },
  progressBarContainer: {
    marginBottom: 12,
  },
  progressBarBackground: {
    height: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 6,
    overflow: 'hidden',
    position: 'relative',
  },
  progressBarFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: 6,
  },
  progressBarGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    backgroundColor: colors.accentGlow,
    borderRadius: 6,
    opacity: 0.5,
  },
  motivationText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 20,
  },
  quickWorkoutButton: {
    backgroundColor: colors.accent,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  quickWorkoutText: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.bg,
    letterSpacing: 0.5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.accent,
  },
  recommendationCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    position: 'relative',
    overflow: 'hidden',
  },
  recommendationGlow: {
    position: 'absolute',
    top: -30,
    left: -30,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.accentMuted,
  },
  recommendationContent: {
    flexDirection: 'row',
  },
  recommendationIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: colors.accentMuted,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  robotEmoji: {
    fontSize: 24,
  },
  recommendationTextContainer: {
    flex: 1,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
  },
  recommendationBody: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.5)',
    lineHeight: 20,
    marginBottom: 12,
  },
  startSessionButton: {
    alignSelf: 'flex-start',
  },
  startSessionText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.accent,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 28,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  statCardGlow: {
    position: 'absolute',
    top: -20,
    right: -20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.accentMuted,
  },
  statEmoji: {
    fontSize: 28,
    marginBottom: 10,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.4)',
    letterSpacing: 1,
    marginBottom: 6,
    textAlign: 'center',
  },
  statValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
  },
  feedContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 18,
    padding: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.06)',
  },
  feedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 14,
  },
  feedAvatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.accentMuted,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  feedAvatarText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.accent,
  },
  feedContent: {
    flex: 1,
  },
  feedText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 4,
  },
  feedUsername: {
    fontWeight: '700',
    color: '#ffffff',
  },
  feedMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  xpGain: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2ecc71',
  },
  feedReaction: {
    fontSize: 14,
  },
  feedTime: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.3)',
  },
  bottomSpacer: {
    height: 100,
  },
});
