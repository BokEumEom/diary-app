// app/components/common/Modal.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, Modal as RNModal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  selectedDate: string;
  onAddAnniversary: () => void;
  onAddSchedule: () => void;
}

const { width } = Dimensions.get('window');

const Modal: React.FC<ModalProps> = ({ visible, onClose, selectedDate, onAddAnniversary, onAddSchedule }) => {
  return (
    <RNModal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalContainer} onPress={onClose}>
        <View style={styles.modalContent}>
          <Pressable onPress={onClose} style={styles.modalCloseButton}>
            <FontAwesome name="chevron-left" size={14} color="pink" />
          </Pressable>
          <Text style={styles.modalTitle}>{new Date(selectedDate).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</Text>
          <Pressable style={styles.modalButton} onPress={onAddAnniversary}>
            <Text style={styles.modalButtonText}>+ 기념일 추가</Text>
          </Pressable>
          <Pressable style={styles.modalButton} onPress={onAddSchedule}>
            <Text style={styles.modalButtonText}>+ 일정 추가</Text>
          </Pressable>
          <View style={styles.modalContentArea}>
            <FontAwesome name="calendar-o" size={50} color="lightgray" />
            <Text style={styles.modalContentText}>선택된 날짜의 일상글이 없습니다. 이 날의 소중한 일상을 기록해보세요!</Text>
            <Pressable>
              <Text style={styles.modalContentButton}>이 날의 일상 기록하기</Text>
            </Pressable>
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
    alignItems: 'center',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modalButtonText: {
    fontSize: 16,
    color: 'pink',
  },
  modalContentArea: {
    marginTop: 20,
    alignItems: 'center',
  },
  modalContentText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginVertical: 20,
  },
  modalContentButton: {
    fontSize: 16,
    color: 'pink',
  },
});

export default Modal;
