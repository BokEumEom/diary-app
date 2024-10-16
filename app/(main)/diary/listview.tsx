import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

const entries = [
  { id: '1', title: 'Studying for my next exams', date: 'March 27, 2021', timeAgo: '8 seconds ago' },
  { id: '2', title: 'Simple things', date: 'March 16, 2021', timeAgo: '44 seconds ago' },
  { id: '3', title: 'Best and worst times', date: 'March 13, 2021', timeAgo: '1 minute ago' },
];

const DiaryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you today?</Text>
      <View style={styles.entriesHeader}>
        <Text style={styles.entriesCount}>8 Entries</Text>
        <View style={styles.entriesFilter}>
          <Text style={styles.filterAll}>all</Text>
          <Text style={styles.filterFavorites}>❤️</Text>
        </View>
      </View>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text style={styles.entryTitle}>{item.title}</Text>
            <View style={styles.entryFooter}>
              <Text style={styles.entryDate}>{item.date}</Text>
              <Text style={styles.entryTimeAgo}>{item.timeAgo}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.composeButton}>
        <Link href="/(main)/diary/post" asChild>
          <Pressable>
            <Text style={styles.composeText}>Writing</Text>
          </Pressable>
        </Link>
      </View>
      <View style={styles.composeButton}>
        <Link href="/(main)/diary" asChild>
          <Pressable>
            <Text style={styles.composeText}>Calnedar</Text>
          </Pressable>
        </Link>
      </View>
      <View style={styles.composeButton}>
        <Link href="/(main)/diary/list" asChild>
          <Pressable>
            <Text style={styles.composeText}>List</Text>
          </Pressable>
        </Link>
      </View>
      <View style={styles.composeButton}>
        <Link href="/(main)/profile" asChild>
          <Pressable>
            <Text style={styles.composeText}>Profile</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  slogan: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  heading: {
    fontSize: 18,
    marginVertical: 8,
  },
  entriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  entriesCount: {
    fontSize: 16,
  },
  entriesFilter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterAll: {
    fontSize: 16,
    marginRight: 8,
  },
  filterFavorites: {
    fontSize: 16,
  },
  entry: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
  },
  entryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  entryFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  entryDate: {
    fontSize: 14,
    color: 'gray',
  },
  entryTimeAgo: {
    fontSize: 14,
    color: 'gray',
  },
  composeButton: {
    backgroundColor: '#ff6f61',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  composeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default DiaryScreen;
