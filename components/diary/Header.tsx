import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface HeaderProps {
  currentDate: string;
  onClose: () => void;
  onSave: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentDate, onClose, onSave }) => (
  <View style={styles.container}>
    <Pressable style={styles.closeButton} onPress={onClose}>
      <MaterialIcons name="close" size={24} color="white" />
    </Pressable>
    <Text style={styles.dateText}>{currentDate}</Text>
    <View style={styles.actionsContainer}>
      <Pressable style={styles.lockButton}>
        <MaterialIcons name="lock" size={24} color="white" />
      </Pressable>
      <Pressable style={styles.saveButton} onPress={onSave}>
        <Text style={styles.saveButtonText}>저장</Text>
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#94a3b8', // slate-400
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeButton: {
    marginRight: 8,
  },
  dateText: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lockButton: {
    marginRight: 8,
  },
  saveButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 4,
  },
  saveButtonText: {
    color: '#94a3b8', // slate-400
    fontSize: 16,
  },
});

export default Header;
