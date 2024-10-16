import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SectionHeader = ({ section }) => (
  <View style={styles.sectionHeaderContainer}>
    <FontAwesome name="calendar" size={16} color="#ff6f61" style={styles.sectionIcon} />
    <Text style={styles.sectionHeader}>{section}</Text>
  </View>
);

const styles = StyleSheet.create({
  sectionHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  sectionIcon: {
    marginRight: 8,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6f61',
  },
});

export default SectionHeader;
