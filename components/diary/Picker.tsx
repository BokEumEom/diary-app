import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Picker = ({ onImagePicked }) => {
  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      onImagePicked(result.uri);
    }
  };

  return (
    <Pressable style={styles.button} onPress={selectImage}>
      <Ionicons name="image" size={26} color="#666" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 15,
  },
});

export default Picker;
