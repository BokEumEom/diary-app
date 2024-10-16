import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileStats from '@/components/profile/ProfileStats';
import ProfilePosts from '@/components/profile/ProfilePosts';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />
      <ProfileStats />
      <ProfilePosts />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

export default Profile;
