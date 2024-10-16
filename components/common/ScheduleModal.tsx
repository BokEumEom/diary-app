// app/components/common/ScheduleModal.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Switch, Dimensions, Modal as RNModal } from 'react-native';

interface ScheduleModalProps {
  visible: boolean;
  onClose: () => void;
  selectedDate: string;
}

const { width } = Dimensions.get('window');

const ScheduleModal: React.FC<ScheduleModalProps> = ({ visible, onClose, selectedDate }) => {
  const [title, setTitle] = useState('');
  const [allDay, setAllDay] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedColor, setSelectedColor] = useState('#ff0000');

  const handleSave = () => {
    // Save functionality here
    onClose();
  };

  const colors = ['#ff0000', '#ff8c00', '#32cd32', '#4682b4', '#9400d3'];

  return (
    <RNModal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalContainer} onPress={onClose}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Pressable onPress={onClose}>
              <Text style={styles.cancelText}>취소</Text>
            </Pressable>
            <Text style={styles.modalTitle}>일정 추가</Text>
            <Pressable onPress={handleSave}>
              <Text style={styles.confirmText}>확인</Text>
            </Pressable>
          </View>
          <Text style={styles.selectedDateText}>선택한 날짜: {new Date(selectedDate).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</Text>
          <TextInput
            style={styles.input}
            placeholder="일정 이름을 입력하세요."
            value={title}
            onChangeText={setTitle}
          />
          <View style={styles.switchContainer}>
            <Text>하루 종일</Text>
            <Switch value={allDay} onValueChange={setAllDay} />
          </View>
          {!allDay && (
            <View style={styles.timeContainer}>
              <Text>시작 시간</Text>
              <TextInput
                style={styles.input}
                placeholder="오전 9:00"
                value={startTime}
                onChangeText={setStartTime}
              />
              <Text>종료 시간</Text>
              <TextInput
                style={styles.input}
                placeholder="오전 10:00"
                value={endTime}
                onChangeText={setEndTime}
              />
            </View>
          )}
          <Text>색상을 선택해주세요.</Text>
          <View style={styles.colorContainer}>
            {colors.map((color) => (
              <Pressable
                key={color}
                style={[styles.colorCircle, { backgroundColor: color, borderWidth: selectedColor === color ? 2 : 0 }]}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>
        </View>
      </Pressable>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelText: {
    color: 'blue',
  },
  confirmText: {
    color: 'blue',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedDateText: {
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingVertical: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  timeContainer: {
    marginBottom: 20,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'black',
  },
});

export default ScheduleModal;
