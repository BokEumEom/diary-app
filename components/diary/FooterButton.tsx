import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FooterButtonProps {
  icon: string;
  onPress: () => void;
}

const FooterButton: React.FC<FooterButtonProps> = ({ icon, onPress }) => (
  <Pressable style={{ marginRight: 15 }} onPress={onPress}>
    <Ionicons name={icon} size={26} color="#666" />
  </Pressable>
);

export default FooterButton;
