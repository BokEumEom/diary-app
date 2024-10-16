// react_native/components/common/DateTimePicker.tsx
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

interface DateTimePickerProps {
  mode: 'date' | 'time';
  label: string;
  value: Date;
  onChange: (date: Date) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ mode, label, value, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || value;
    setShowPicker(Platform.OS === 'ios');
    onChange(currentDate);
  };

  return (
    <View>
      <Pressable onPress={() => setShowPicker(true)} style={styles.pickerButton}>
        <Text style={styles.label}>{label}: {value.toLocaleString('ko-KR')}</Text>
      </Pressable>
      {showPicker && (
        <RNDateTimePicker
          value={value}
          mode={mode}
          display="default"
          onChange={handleChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pickerButton: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
});

export default DateTimePicker;

