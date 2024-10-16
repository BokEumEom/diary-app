// react_native/app/(auth)/signup.tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import TextField from '@/components/common/TextField';
import Button from '@/components/common/Button';

export default function SignupScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // 회원가입 로직을 여기에 구현합니다
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/icon.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.title}>Let me</Text>
      <Text style={styles.subtitle}>get to know you</Text>
      <TextField
        icon="user"
        label="Name"
        placeholder="What should I call you?"
        value={username}
        onChangeText={setUsername}
      />
      <TextField
        icon="envelope"
        label="Email"
        placeholder="How can I reach you?"
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
      <Button title="Create Account" onPress={handleSignup} buttonClassName="bg-gray-800 mt-3" icon="arrow-right" />
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Already have an account?</Text>
        <Link href="/(auth)/login" style={styles.link}>
          Login
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
