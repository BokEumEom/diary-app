import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import { format, startOfMonth, getDay } from 'date-fns';
import { months } from '@/constants/constants';
import { emotions } from '@/constants/emotions';
import Modal from '@/components/common/Modal';
import AnniversaryModal from '@/components/common/AnniversaryModal';
import ScheduleModal from '@/components/common/ScheduleModal';
import CalendarHeader from '@/components/calendar/CalendarHeader';

const { width } = Dimensions.get('window');

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const BackView: React.FC<{ monthIndex: number }> = ({ monthIndex }) => {
  const [state, setState] = useState({
    currentMonth: monthIndex,
    selectedDate: null,
    modalVisible: false,
    anniversaryModalVisible: false,
    scheduleModalVisible: false,
    showDatePicker: false,
    today: new Date(),
  });

  const { currentMonth, selectedDate, modalVisible, anniversaryModalVisible, scheduleModalVisible, showDatePicker, today } = state;

  const monthData = months[currentMonth];
  const monthName = Object.keys(monthData)[0];
  const daysInMonth = Object.values(monthData)[0];
  const firstDayOfMonth = getDay(startOfMonth(new Date(2024, currentMonth - 1)));

  const calendarGrid = useMemo(() => {
    const grid = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      grid.push('');
    }
    for (let i = 1; i <= daysInMonth; i++) {
      grid.push(i);
    }
    return grid;
  }, [firstDayOfMonth, daysInMonth]);

  const handlePrevMonth = () => {
    setState((prevState) => ({
      ...prevState,
      currentMonth: prevState.currentMonth === 1 ? 12 : prevState.currentMonth - 1,
    }));
  };

  const handleNextMonth = () => {
    setState((prevState) => ({
      ...prevState,
      currentMonth: prevState.currentMonth === 12 ? 1 : prevState.currentMonth + 1,
    }));
  };

  const handleDayPress = (day: number) => {
    const date = format(new Date(2024, currentMonth - 1, day), 'yyyy-MM-dd');
    setState((prevState) => ({
      ...prevState,
      selectedDate: date,
      modalVisible: true,
    }));
  };

  const closeModal = () => {
    setState((prevState) => ({
      ...prevState,
      modalVisible: false,
      anniversaryModalVisible: false,
      scheduleModalVisible: false,
      selectedDate: null,
    }));
  };

  const handleAddAnniversary = () => {
    setState((prevState) => ({
      ...prevState,
      anniversaryModalVisible: true,
      modalVisible: false,
    }));
  };

  const handleAddSchedule = () => {
    setState((prevState) => ({
      ...prevState,
      scheduleModalVisible: true,
      modalVisible: false,
    }));
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || new Date();
    setState((prevState) => ({
      ...prevState,
      showDatePicker: Platform.OS === 'ios',
      selectedDate: format(currentDate, 'yyyy-MM-dd'),
      modalVisible: true,
    }));
  };

  return (
    <View style={styles.container}>
      <CalendarHeader
        monthName={monthName}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <View style={styles.calendar}>
        {weekDays.map((day, index) => (
          <Text key={index} style={styles.weekDay}>{day}</Text>
        ))}
        {calendarGrid.map((day, index) => {
          const isToday = today.getDate() === day && today.getMonth() + 1 === currentMonth;
          const emotion = Object.keys(emotions)[day % Object.keys(emotions).length];
          return (
            <Pressable key={index} style={[styles.dayContainer, isToday && styles.todayContainer]} onPress={() => day !== '' && handleDayPress(day)}>
              <Text style={[styles.day, isToday && styles.todayText]}>{day !== '' ? day : ''}</Text>
              {day !== '' && (
                <View style={[styles.emojiContainer, { backgroundColor: emotions[emotion] }]}>
                  <Text style={styles.emoji}>{emotion}</Text>
                </View>
              )}
            </Pressable>
          );
        })}
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.footerButton} onPress={() => setState((prevState) => ({ ...prevState, showDatePicker: true }))}>
          <FontAwesome name="calendar" size={14} color="pink" />
          <Text style={styles.footerButtonText}>Today</Text>
        </Pressable>
        <Pressable style={styles.footerButton}>
          <FontAwesome name="cog" size={14} color="pink" />
          <Text style={styles.footerButtonText}>Settings</Text>
        </Pressable>
      </View>

      {selectedDate && (
        <>
          <Modal
            visible={modalVisible}
            onClose={closeModal}
            selectedDate={selectedDate}
            onAddAnniversary={handleAddAnniversary}
            onAddSchedule={handleAddSchedule}
          />
          <AnniversaryModal
            visible={anniversaryModalVisible}
            onClose={closeModal}
            selectedDate={selectedDate}
          />
          <ScheduleModal
            visible={scheduleModalVisible}
            onClose={closeModal}
            selectedDate={selectedDate}
          />
        </>
      )}

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
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
    backgroundColor: 'white',
    alignItems: 'center',
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: width * 0.95,
    marginTop: 20,
  },
  weekDay: {
    width: width * 0.95 / 7,
    textAlign: 'center',
    marginBottom: 10,
  },
  dayContainer: {
    width: width * 0.95 / 7,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    position: 'relative',
  },
  todayContainer: {
    backgroundColor: '#ffe5b4',
    borderRadius: 30,
  },
  day: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 2,
  },
  todayText: {
    color: 'red',
    fontWeight: 'bold',
  },
  emojiContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 5,
  },
  emoji: {
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  footerButton: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  footerButtonText: {
    color: '#FF6B6B',
    fontSize: 14,
    marginLeft: 4,
  },
});

export default BackView;
