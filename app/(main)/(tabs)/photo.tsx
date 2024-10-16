import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import Animated, { FadeInUp, FadeOut, Layout } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const mockEntries = [
  {
    id: '1',
    title: "Sony Walkman's Cultural Revolution",
    content: 'The Sony Walkman, introduced in 1979, revolutionized personal audio and transformed how people experience music on the go. This portable cassette player, initially created to allow private listening, became a global phenomenon.',
    image: require('@/assets/images/image0.jpg'),
    views: 4497,
    likes: 212,
    time: '1d',
  },
  {
    id: '2',
    title: 'Beautiful Sunset',
    content: 'Captured this stunning sunset during my evening walk. The colors were breathtaking!',
    image: require('@/assets/images/image1.jpg'),
    views: 3210,
    likes: 180,
    time: '2d',
  },
  {
    id: '3',
    title: 'Beautiful Sunset',
    content: 'Captured this stunning sunset during my evening walk. The colors were breathtaking!',
    image: require('@/assets/images/image2.jpg'),
    views: 3210,
    likes: 180,
    time: '2d',
  },
];

const PhotoScreen = () => {
  const [entries, setEntries] = useState(mockEntries);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Animated.View
            entering={FadeInUp.delay(index * 100).duration(500)}
            exiting={FadeOut.duration(300)}
            layout={Layout.springify()}
            style={[styles.entryContainer, index === 0 && styles.firstEntry, index === entries.length - 1 && styles.lastEntry]}
          >
            <Image source={item.image} style={styles.entryImage} />
            <View style={styles.entryContent}>
              <Text style={styles.entryTitle}>{item.title}</Text>
              <Text style={styles.entryText}>{item.content}</Text>
              <View style={styles.entryFooter}>
                <View style={styles.entryStats}>
                  <MaterialIcons name="visibility" size={16} color="#fff" />
                  <Text style={styles.entryStatText}>{item.views}</Text>
                  <MaterialIcons name="favorite" size={16} color="#fff" />
                  <Text style={styles.entryStatText}>{item.likes}</Text>
                  <MaterialIcons name="schedule" size={16} color="#fff" />
                  <Text style={styles.entryStatText}>{item.time}</Text>
                </View>
              </View>
            </View>
          </Animated.View>
        )}
        snapToAlignment="start"
        snapToInterval={height * 0.68} // Adjust the interval to ensure one entry is visible at a time
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
      <Link href="/(main)/diary/post" asChild>
        <Pressable style={styles.fab}>
          <MaterialIcons name="edit" size={24} color="white" />
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatListContent: {
    paddingVertical: 20,
  },
  entryContainer: {
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FF6B6B',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    height: height * 0.68, // Adjust the height to ensure one entry is visible at a time
    width: width * 0.9,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  firstEntry: {
    marginTop: 10,
  },
  lastEntry: {
    marginBottom: 20,
  },
  entryImage: {
    width: '100%',
    height: '50%',
    borderRadius: 10,
  },
  entryContent: {
    marginTop: 10,
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  entryText: {
    marginTop: 5,
    fontSize: 14,
    color: '#fff',
  },
  entryFooter: {
    marginTop: 10,
  },
  entryStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  entryStatText: {
    marginLeft: 5,
    marginRight: 15,
    fontSize: 14,
    color: '#fff',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#FF6B6B',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default PhotoScreen;
