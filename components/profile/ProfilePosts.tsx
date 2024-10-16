import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const posts = [
  { id: '1', title: 'First Post', content: 'This is my first post.' },
  { id: '2', title: 'Second Post', content: 'This is my second post.' },
  // 추가 게시물 데이터...
];

const ProfilePosts = () => {
  return (
    <View style={styles.postsContainer}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postContent}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  post: {
    marginBottom: 20,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  postContent: {
    fontSize: 16,
    color: '#666',
  },
});

export default ProfilePosts;
