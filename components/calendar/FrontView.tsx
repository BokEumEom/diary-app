import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import { months } from '@/constants/constants';

interface FrontViewProps {
  monthIndex: number;
}

const FrontView: React.FC<FrontViewProps> = ({ monthIndex }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  if (monthIndex < 0 || monthIndex >= months.length) {
    console.error('Invalid month index');
    return null; // or a fallback UI
  }

  const monthName = Object.keys(months[monthIndex])[0];
  const daysInMonth = Object.values(months[monthIndex])[0];

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || new Date();
    setShowDatePicker(Platform.OS === 'ios');
    setSelectedDate(currentDate);
    // Add any additional logic you want to perform with the selected date
  };

  return (
    <View style={styles.container}>
      <View style={styles.monthInfo}>
        <Text style={styles.monthNumber}>{monthIndex}</Text>
        <Text style={styles.monthName}>{monthName}</Text>
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>5/{daysInMonth}</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(5 / daysInMonth) * 100}%` }]} />
        </View>
      </View>
      <Pressable
        onPress={() => setShowDatePicker(true)}
        style={styles.datePickerButton}
        accessibilityLabel="Open date picker"
      >
        <FontAwesome name="calendar" size={24} color="white" />
      </Pressable>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'cyan',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: Dimensions.get('window').width * 0.68,
    height: Dimensions.get('window').height * 0.5,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  monthInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  monthNumber: {
    fontSize: 56,
    color: 'white',
  },
  monthName: {
    fontSize: 40,
    color: 'white',
  },
  progressContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 'auto',
  },
  progressText: {
    color: 'white',
    marginBottom: 3,
  },
  progressBar: {
    width: '100%',
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'white',
  },
  datePickerButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});

export default FrontView;
