import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface CalendarHeaderProps {
  monthName: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ monthName, onPrevMonth, onNextMonth }) => (
  <View style={styles.header}>
    <Pressable onPress={onPrevMonth}>
      <FontAwesome name="chevron-left" size={14} color="black" />
    </Pressable>
    <Text style={styles.monthText}>{monthName}</Text>
    <Pressable onPress={onNextMonth}>
      <FontAwesome name="chevron-right" size={14} color="black" />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  monthText: {
    fontSize: 16,
  },
});

export default CalendarHeader;
