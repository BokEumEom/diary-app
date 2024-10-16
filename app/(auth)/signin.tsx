import { View, Text, Image, Pressable, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import { Link, useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require('@/assets/images/background.png')} />

      {/* Lights */}
      <View style={styles.lightsContainer}>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={styles.lightLarge}
          source={require('@/assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          style={styles.lightSmall}
          source={require('@/assets/images/light.png')}
        />
      </View>

      {/* Title and Form */}
      <View style={styles.formContainer}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Animated.Text entering={FadeInUp.duration(1000).springify()} style={styles.title}>
            Login
          </Animated.Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Animated.View entering={FadeInDown.duration(1000).springify()} style={styles.inputContainer}>
            <TextInput placeholder="Email" placeholderTextColor="gray" style={styles.textInput} />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={[styles.inputContainer, styles.marginBottom]}>
            <TextInput placeholder="Password" placeholderTextColor="gray" secureTextEntry style={styles.textInput} />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={styles.buttonContainer}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={styles.signupContainer}>
            <Text>Don't have an account?</Text>
            <Pressable>
              <Link href="/(auth)/signup_new">
                <Text style={styles.signupText}>SignUp</Text>
              </Link>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  lightsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
  },
  lightLarge: {
    height: 225,
    width: 90,
  },
  lightSmall: {
    height: 160,
    width: 65,
  },
  formContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    paddingTop: 40,
    paddingBottom: 10,
  },
  titleContainer: {
    alignItems: 'center',
    paddingTop: 70,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 50,
  },
  form: {
    alignItems: 'center',
    marginHorizontal: 16,
    gap: 16,
  },
  inputContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 16,
    borderRadius: 16,
    width: '100%',
  },
  textInput: {
    color: 'black',
  },
  marginBottom: {
    marginBottom: 12,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#38bdf8',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: '#0891b2',
    marginLeft: 4,
  },
});
