import React from 'react';
import EmojiPicker from './EmojiPicker';
import EmojiList from './EmojiList';

interface EmojiModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (emoji: any) => void;
}

const EmojiModal: React.FC<EmojiModalProps> = ({ visible, onClose, onSelect }) => {
  return (
    <EmojiPicker isVisible={visible} onClose={onClose}>
      <EmojiList onSelect={onSelect} onCloseModal={onClose} />
    </EmojiPicker>
  );
};

export default EmojiModal;
