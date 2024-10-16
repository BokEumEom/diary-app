import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Entry = ({ item }) => (
  <View style={styles.entryContainer}>
    <View style={styles.dateContainer}>
      <Text style={styles.entryDay}>{item.day}</Text>
      <Text style={styles.entryWeekday}>{item.weekday}</Text>
    </View>
    <View style={styles.entryContent}>
      <View style={styles.entryHeader}>
        <Text style={styles.entryDate}>{item.date}</Text>
        <Text style={styles.entryEmoji}>{item.emoji}</Text>
      </View>
      <Text style={styles.entryTitle}>{item.title}</Text>
      <Text style={styles.entryTime}>{item.time}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  entryContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 4,
    alignItems: 'center',
  },
  dateContainer: {
    marginRight: 16,
    alignItems: 'center',
  },
  entryDay: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  entryWeekday: {
    fontSize: 14,
    color: 'gray',
  },
  entryContent: {
    flex: 1,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  entryDate: {
    fontSize: 14,
    color: 'gray',
  },
  entryEmoji: {
    fontSize: 18,
  },
  entryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  entryTime: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Entry;
