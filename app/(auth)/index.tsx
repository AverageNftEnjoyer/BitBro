import { StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import { Text, View } from '@/components/Themed';

export default function AuthGateScreen() {
  const router = useRouter();

  const handleAppleSignIn = () => {
    console.log('Continue with Apple pressed - not implemented');
  };

  const handleGoogleSignIn = () => {
    console.log('Continue with Google pressed - not implemented');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BitBro</Text>
        <Text style={styles.subtitle}>Your Workout Companion</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.appleButton} onPress={handleAppleSignIn}>
          <Text style={styles.appleButtonText}>Continue with Apple</Text>
        </Pressable>

        <Pressable style={styles.googleButton} onPress={handleGoogleSignIn}>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </Pressable>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <Pressable
          style={styles.createAccountButton}
          onPress={() => router.push('/(auth)/signup')}
        >
          <Text style={styles.createAccountButtonText}>Create account</Text>
        </Pressable>

        <Pressable
          style={styles.loginButton}
          onPress={() => router.push('/(auth)/login')}
        >
          <Text style={styles.loginButtonText}>Log in</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginTop: 8,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
    gap: 12,
  },
  appleButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  appleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  googleButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#444',
  },
  dividerText: {
    marginHorizontal: 16,
    opacity: 0.6,
    fontSize: 14,
  },
  createAccountButton: {
    backgroundColor: '#2f95dc',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginButton: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 16,
    opacity: 0.8,
  },
});
