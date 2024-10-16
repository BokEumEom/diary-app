// app/(main)/_layout.tsx
import React from 'react';
import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="diary/index" />
      <Stack.Screen name="diary/list" />
      <Stack.Screen name="diary/listview" />
      <Stack.Screen name="diary/post" />
      <Stack.Screen name="onboard/index" />
      <Stack.Screen name="profile/index" />
      {/* Add other screens here as necessary */}
    </Stack>
  );
}
