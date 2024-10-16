import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Picker from './Picker';
import FooterButton from './FooterButton';
import EmojiModal from '@/components/common/EmojiModal';

interface FooterProps {
  onImagePicked: (uri: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onImagePicked }) => {
  const [isEmojiModalVisible, setEmojiModalVisible] = useState(false);

  const handleEmojiSelect = (emoji: any) => {
    // Handle the selected emoji (e.g., add to content or display somewhere)
    console.log('Selected emoji:', emoji);
    setEmojiModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Picker onImagePicked={onImagePicked} />
      <FooterButton icon="attach" onPress={() => {}} />
      <FooterButton icon="text" onPress={() => {}} />
      <FooterButton icon="mic-outline" onPress={() => {}} />
      <FooterButton icon="color-palette-outline" onPress={() => {}} />
      <FooterButton icon="happy-outline" onPress={() => setEmojiModalVisible(true)} />
      <EmojiModal
        visible={isEmojiModalVisible}
        onClose={() => setEmojiModalVisible(false)}
        onSelect={handleEmojiSelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 50,
    paddingHorizontal: 15,
  },
});

export default Footer;
