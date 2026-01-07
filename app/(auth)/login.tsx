import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuth } from "../../context/AuthContext";
import { AppBackground } from "../../src/ui/AppBackground";
import { colors } from "../../src/ui/theme";

const avatar = require("../../assets/avatar.png");

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const getInputValue = (ref: React.RefObject<TextInput | null>): string => {
    if (Platform.OS === 'web' && ref.current) {
      const input = ref.current as unknown as HTMLInputElement;
      return input.value || '';
    }
    return '';
  };

  const handleLogin = async () => {
    let emailValue = email;
    let passwordValue = password;

    if (Platform.OS === 'web') {
      const webEmail = getInputValue(emailRef);
      const webPassword = getInputValue(passwordRef);
      if (webEmail) emailValue = webEmail;
      if (webPassword) passwordValue = webPassword;
    }

    if (!emailValue || !passwordValue) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      await login(emailValue, passwordValue);
      router.replace("/(tabs)");
    } catch (error: any) {
      let message = "An error occurred during login";
      if (error.code === "auth/user-not-found") {
        message = "No account found with this email";
      } else if (error.code === "auth/wrong-password") {
        message = "Incorrect password";
      } else if (error.code === "auth/invalid-email") {
        message = "Invalid email address";
      } else if (error.code === "auth/invalid-credential") {
        message = "Invalid email or password";
      }
      Alert.alert("Login Error", message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppBackground>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.headerRow}>
              <Pressable
                style={styles.backButton}
                onPress={() => router.back()}
              >
                <Text style={styles.backArrow}>{"<"}</Text>
              </Pressable>
              <Text style={styles.headerLabel}>BITBRO.APP</Text>
              <View style={styles.headerSpacer} />
            </View>

            <View style={styles.avatarContainer}>
              <View style={styles.avatarTile}>
                <Image source={avatar} style={styles.avatarImage} />
              </View>
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                <Text style={styles.titleWhite}>Welcome </Text>
                <Text style={styles.titleAccent}>Back</Text>
              </Text>
              <Text style={styles.subtitle}>
                Sign in to continue your{"\n"}fitness journey.
              </Text>
            </View>

            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Email Address</Text>
                <View style={styles.inputWrapper}>
                  <Ionicons name="mail-outline" size={20} color="rgba(255, 255, 255, 0.6)" style={styles.inputIcon} />
                  <TextInput
                    ref={emailRef}
                    style={styles.input}
                    placeholder="name@example.com"
                    placeholderTextColor="rgba(255, 255, 255, 0.4)"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete="email"
                    textContentType="emailAddress"
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.inputWrapper}>
                  <Ionicons name="lock-closed-outline" size={20} color="rgba(255, 255, 255, 0.6)" style={styles.inputIcon} />
                  <TextInput
                    ref={passwordRef}
                    style={styles.input}
                    placeholder="••••••••"
                    placeholderTextColor="rgba(255, 255, 255, 0.4)"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    autoComplete="password"
                    textContentType="password"
                  />
                  <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="rgba(255, 255, 255, 0.4)" style={styles.eyeIcon} />
                  </Pressable>
                </View>
              </View>

              <Pressable style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </Pressable>
            </View>

            <View style={styles.buttonContainer}>
              <View style={styles.buttonGlow} />
              <Pressable
                style={({ pressed }) => [
                  styles.primaryButton,
                  pressed && !isLoading && styles.primaryButtonPressed,
                  isLoading && styles.primaryButtonDisabled,
                ]}
                onPress={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="#0B0D12" />
                ) : (
                  <Text style={styles.primaryButtonText}>LOGIN</Text>
                )}
              </Pressable>
            </View>

            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.socialRow}>
              <Pressable
                style={({ pressed }) => [
                  styles.socialButton,
                  pressed && styles.socialButtonPressed,
                ]}
                onPress={() => console.log("google")}
              >
                <Text style={styles.socialIcon}>G</Text>
                <Text style={styles.socialText}>Google</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  styles.socialButton,
                  pressed && styles.socialButtonPressed,
                ]}
                onPress={() => console.log("apple")}
              >
                <Ionicons name="logo-apple" size={20} color="#ffffff" />
                <Text style={styles.socialText}>Apple</Text>
              </Pressable>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>New to BitBro? </Text>
              <Pressable onPress={() => router.push("/(auth)/signup")}>
                <Text style={styles.footerLink}>Join the Squad</Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "600",
  },
  headerLabel: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
  },
  headerSpacer: {
    width: 40,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  avatarTile: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: "rgba(20, 20, 30, 0.9)",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: colors.accentGlow,
    boxShadow: `0 0 12px ${colors.accentGlow}`,
    elevation: 8,
    overflow: "hidden",
  },
  avatarImage: {
    width: 120,
    height: 190,
    resizeMode: "cover",
    top: -10,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 12,
    textAlign: "center",
  },
  titleWhite: {
    color: "#ffffff",
  },
  titleAccent: {
    color: colors.accent,
  },
  subtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.5)",
    textAlign: "center",
    lineHeight: 20,
  },
  form: {
    gap: 18,
    marginBottom: 24,
  },
  inputGroup: {
    gap: 8,
  },
  inputLabel: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 13,
    fontWeight: "600",
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
    paddingHorizontal: 14,
    height: 52,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: "#ffffff",
    fontSize: 16,
    height: "100%",
  },
  eyeIcon: {
    marginLeft: 8,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: -8,
  },
  forgotPasswordText: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: "600",
  },
  buttonContainer: {
    position: "relative",
    marginBottom: 24,
  },
  buttonGlow: {
    position: "absolute",
    top: 4,
    left: 4,
    right: 4,
    bottom: -4,
    borderRadius: 14,
    backgroundColor: colors.accentGlow,
  },
  primaryButton: {
    backgroundColor: colors.accent,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    elevation: 8,
  },
  primaryButtonPressed: {
    backgroundColor: "#E025BF",
    transform: [{ scale: 0.98 }],
  },
  primaryButtonDisabled: {
    backgroundColor: colors.accentMuted,
    elevation: 0,
  },
  primaryButtonText: {
    color: "#0B0D12",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 1,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  dividerText: {
    color: "rgba(255, 255, 255, 0.4)",
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1,
    marginHorizontal: 16,
  },
  socialRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 32,
  },
  socialButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    borderRadius: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
    gap: 8,
  },
  socialButtonPressed: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  socialIcon: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },
  socialText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 14,
  },
  footerLink: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: "600",
  },
});
