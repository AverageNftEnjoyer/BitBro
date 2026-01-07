import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ACTIVE_COLOR = '#00D4FF';
const INACTIVE_COLOR = '#6B7280';
const BAR_BACKGROUND = '#1A1A2E';
const CENTER_BUTTON_COLOR = '#00D4FF';

function TabIcon({ label, focused }: { label: string; focused: boolean }) {
  return (
    <Text style={[styles.icon, { color: focused ? ACTIVE_COLOR : INACTIVE_COLOR }]}>
      {label}
    </Text>
  );
}

function CenterButton() {
  const router = useRouter();

  return (
    <Pressable
      style={styles.centerButtonContainer}
    >
      <View style={styles.centerButton}>
        <Text style={styles.centerButtonText}>+</Text>
      </View>
    </Pressable>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabIcon label="🏠" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="workouts"
        options={{
          title: 'Workouts',
          tabBarIcon: ({ focused }) => <TabIcon label="💪" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          title: '',
          tabBarButton: () => <CenterButton />,
        }}
      />
      <Tabs.Screen
        name="league"
        options={{
          title: 'League',
          tabBarIcon: ({ focused }) => <TabIcon label="🏆" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabIcon label="👤" focused={focused} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: BAR_BACKGROUND,
    borderTopWidth: 0,
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
  icon: {
    fontSize: 24,
  },
  centerButtonContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: CENTER_BUTTON_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: CENTER_BUTTON_COLOR,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  centerButtonText: {
    fontSize: 36,
    fontWeight: '300',
    color: '#FFFFFF',
    marginTop: -2,
  },
});
