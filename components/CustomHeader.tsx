import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { toggleSidebar } from '../store/sidebarSlice';

interface CustomHeaderProps {
  isTransparent?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ isTransparent = false }) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <View style={[styles.container, isTransparent && styles.transparentContainer]}>
      <Pressable style={styles.iconContainer} onPress={() => dispatch(toggleSidebar())}>
        <Ionicons name="menu" size={24} color="white" />
      </Pressable>
      <Text style={styles.title}>Diary App</Text>
      <View style={styles.rightIcons}>
        <Pressable style={styles.iconContainer}>
          <Ionicons name="search" size={24} color="white" />
        </Pressable>
        <Pressable style={styles.iconContainer}>
          <Ionicons name="notifications" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
    height: 50,
    backgroundColor: '#FF6B6B',
  },
  transparentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  iconContainer: {
    padding: 12,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightIcons: {
    flexDirection: 'row',
  },
});

export default CustomHeader;
