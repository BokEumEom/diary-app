// react_native/app/(auth)/login.tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import TextField from '@/components/common/TextField';
import Button from '@/components/common/Button';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // 로그인 로직을 여기에 구현합니다
    console.log('Email:', email);
    console.log('Password:', password);
    router.replace('(main)/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/icon.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.title}>Hey!</Text>
      <Text style={styles.subtitle}>Is that you?</Text>
      <TextField
        icon="envelope"
        label="Email"
        placeholder="It's-me@mail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextField
        icon="lock"
        label="Password"
        placeholder="Our little secret"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Let's go" onPress={handleLogin} buttonClassName="bg-gray-800 mt-3" icon="arrow-right" />
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>First time here?</Text>
        <Link href="/(auth)/signup" style={styles.link}>
          Sign Up
        </Link>
        <Link href="/(auth)/signin" style={styles.link}>
          Sign In
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  icon: {
    width: 160,
    maxHeight: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  linkContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    color: 'gray',
  },
  link: {
    marginLeft: 5,
    color: 'black',
    fontWeight: 'bold',
  },
});
