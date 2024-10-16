import React from 'react';
import { StyleSheet, FlatList, Image, Pressable, View } from 'react-native';

interface EmojiListProps {
  onSelect: (emoji: any) => void;
  onCloseModal: () => void;
}

const emojis = [
  require('@/assets/images/emoji_diary/emoji1.png'),
  require('@/assets/images/emoji_diary/emoji2.png'),
  require('@/assets/images/emoji_diary/emoji3.png'),
  require('@/assets/images/emoji_diary/emoji4.png'),
  require('@/assets/images/emoji_diary/emoji5.png'),
  require('@/assets/images/emoji_diary/emoji6.png'),
  // Add more emojis here if needed
];

const EmojiList: React.FC<EmojiListProps> = ({ onSelect, onCloseModal }) => {
  return (
    <FlatList
      data={emojis}
      numColumns={5}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} style={styles.image} />
        </Pressable>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  image: {
    width: 60,
    height: 60,
    margin: 10,
  },
});

export default EmojiList;
