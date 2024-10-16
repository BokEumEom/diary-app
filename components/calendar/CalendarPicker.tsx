import React, { useState } from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarPickerNative from 'react-native-calendar-picker';

interface CalendarPickerProps {
  onDateChange: (date: any) => void;
}

const CalendarPicker: React.FC<CalendarPickerProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChangeWeb = (date: Date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  if (Platform.OS === 'web') {
    return (
      <View style={styles.webContainer}>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChangeWeb}
          inline
        />
      </View>
    );
  } else {
    return (
      <CalendarPickerNative onDateChange={onDateChange} />
    );
  }
};

const styles = StyleSheet.create({
  webContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});

export default CalendarPicker;
