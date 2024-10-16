import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const entries = [
  { id: '1', title: 'My lovely family ❤️', date: 'Thu, Jul 29, 2021', day: '29', weekday: 'Thu', section: 'Today', emoji: '😊', time: '4:07 PM' },
  { id: '2', title: 'Beautiful flowers. 🌸', date: 'Wed, Jul 28, 2021', day: '28', weekday: 'Wed', section: 'Yesterday', emoji: '😍', time: '4:19 PM' },
  { id: '3', title: 'My birthday party 🎉', date: 'Sat, Jul 24, 2021', day: '24', weekday: 'Sat', section: 'Last week', emoji: '🥳', time: '4:20 PM' },
  { id: '4', title: 'Fun walk with my dog 🐶', date: 'Fri, Jul 23, 2021', day: '23', weekday: 'Fri', section: 'Last week', emoji: '🐕', time: '2:20 PM' },
  { id: '5', title: 'Vacation at the sea. 🌊', date: 'Sun, Jul 18, 2021', day: '18', weekday: 'Sun', section: 'Last week', emoji: '😎', time: '4:24 PM' },
];

const sections = ['Today', 'Yesterday', 'Last week'];

const renderSectionHeader = (section: string) => (
  <View style={styles.sectionHeaderContainer}>
    <FontAwesome name="calendar" size={16} color="#ff6f61" style={styles.sectionIcon} />
    <Text style={styles.sectionHeader}>{section}</Text>
  </View>
);

const renderSeparator = () => (
  <View style={styles.separator} />
);

const DiaryScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
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
        )}
        ListHeaderComponent={() => (
          <View>
            {sections.map((section) => (
              <View key={section}>
                {renderSectionHeader(section)}
                {entries
                  .filter((entry) => entry.section === section)
                  .map((entry) => (
                    <View key={entry.id}>
                      <View style={styles.entryContainer}>
                        <View style={styles.dateContainer}>
                          <Text style={styles.entryDay}>{entry.day}</Text>
                          <Text style={styles.entryWeekday}>{entry.weekday}</Text>
                        </View>
                        <View style={styles.entryContent}>
                          <View style={styles.entryHeader}>
                            <Text style={styles.entryDate}>{entry.date}</Text>
                            <Text style={styles.entryEmoji}>{entry.emoji}</Text>
                          </View>
                          <Text style={styles.entryTitle}>{entry.title}</Text>
                          <Text style={styles.entryTime}>{entry.time}</Text>
                        </View>
                      </View>
                      {renderSeparator()}
                    </View>
                  ))}
              </View>
            ))}
          </View>
        )}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingVertical: 8,
  },
  sectionIcon: {
    marginRight: 8,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6f61',
  },
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
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 4,
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
});

export default DiaryScreen;
