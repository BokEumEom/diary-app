import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={{ uri: 'https://your-avatar-url.com' }} style={styles.avatar} />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.bio}>Just a diary enthusiast. Love to write and share my thoughts.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ProfileHeader;
