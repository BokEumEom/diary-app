// app/components/common/AnniversaryModal.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Switch, Dimensions, Modal as RNModal } from 'react-native';

interface AnniversaryModalProps {
  visible: boolean;
  onClose: () => void;
  selectedDate: string;
}

const { width } = Dimensions.get('window');

const AnniversaryModal: React.FC<AnniversaryModalProps> = ({ visible, onClose, selectedDate }) => {
  const [title, setTitle] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
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
            <Text style={styles.modalTitle}>기념일 추가</Text>
            <Pressable onPress={handleSave}>
              <Text style={styles.confirmText}>확인</Text>
            </Pressable>
          </View>
          <Text style={styles.selectedDateText}>선택한 날짜: {new Date(selectedDate).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</Text>
          <TextInput
            style={styles.input}
            placeholder="기념일 이름을 입력하세요."
            value={title}
            onChangeText={setTitle}
          />
          <View style={styles.switchContainer}>
            <Text>매년 기념일 지정</Text>
            <Switch value={isRecurring} onValueChange={setIsRecurring} />
          </View>
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

export default AnniversaryModal;
