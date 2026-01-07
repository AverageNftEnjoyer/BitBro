import { useRouter } from "expo-router";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const bg = require("../assets/images/boot-bg.png");

export default function BootScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backgroundImage} resizeMode="cover">
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.content}>
            <View style={styles.topSection}>
              <View style={styles.logoPill}>
                <Text style={styles.logoText}>
                  <Text style={styles.logoBit}>BIT</Text>
                  <Text style={styles.logoBros}>BRO</Text>
                </Text>
              </View>
            </View>

            <View style={styles.mainSection}>
              <Text style={styles.headline}>
                <Text style={styles.headlineWhite}>Your Fitness.</Text>
                {"\n"}
                <Text style={styles.headlineCyan}>Gamified.</Text>
              </Text>

              <Text style={styles.subtitle}>
                Track workouts, build your avatar,{"\n"}and conquer goals with the squad.
              </Text>
            </View>

            <View style={styles.ctaSection}>
              <Pressable
                style={({ pressed }) => [
                  styles.primaryButton,
                  pressed && styles.primaryButtonPressed,
                ]}
                onPress={() => router.push("/(auth)/signup")}
              >
                <Text style={styles.primaryButtonText}>JOIN THE SQUAD →</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  styles.secondaryButton,
                  pressed && styles.secondaryButtonPressed,
                ]}
                onPress={() => router.push("/(auth)/login")}
              >
                <Text style={styles.secondaryButtonText}>Login</Text>
              </Pressable>
            </View>

            <View style={styles.footerSection}>
              <Text style={styles.footerText}>
                By continuing, you agree to our Terms & Conditions and Privacy Policy
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0f",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  topSection: {
    alignItems: "center",
    paddingTop: 40,
  },
  logoPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(20, 20, 30, 0.85)",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "rgba(0, 212, 255, 0.3)",
    shadowColor: "#00d4ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  dumbbellIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  logoText: {
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: 2,
  },
  logoBit: {
    color: "#ffffff",
  },
  logoBros: {
    color: "#00d4ff",
  },
  mainSection: {
    alignItems: "center",
    paddingVertical: 20,
  },
  headline: {
    textAlign: "center",
    marginBottom: 24,
  },
  headlineWhite: {
    fontSize: 42,
    fontWeight: "900",
    color: "#ffffff",
    letterSpacing: 1,
  },
  headlineCyan: {
    fontSize: 42,
    fontWeight: "900",
    color: "#00d4ff",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 0.3,
  },
  ctaSection: {
    gap: 14,
    paddingBottom: 10,
  },
  primaryButton: {
    backgroundColor: "#00d4ff",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#00d4ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  primaryButtonPressed: {
    backgroundColor: "#00b8e0",
    transform: [{ scale: 0.98 }],
  },
  primaryButtonText: {
    color: "#0a0a0f",
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 1,
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.4)",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  secondaryButtonPressed: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.6)",
  },
  secondaryButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  footerSection: {
    alignItems: "center",
    paddingBottom: 10,
  },
  footerText: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.4)",
    textAlign: "center",
    lineHeight: 18,
  },
});
