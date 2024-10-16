// app/(auth)/_layout.tsx
import React from 'react';
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup_new" />
      {/* Add other screens here as necessary */}
    </Stack>
  );
}
