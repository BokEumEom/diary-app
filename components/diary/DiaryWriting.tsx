import React, { useState, useCallback } from 'react';
import { View, TextInput, ScrollView, Image, Alert, StyleSheet } from 'react-native';
import moment from 'moment';
import 'moment/locale/ko';
import { useNavigation } from 'expo-router';
import Header from './Header';
import Footer from './Footer';

moment.locale('ko');

const DiaryWriting: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [imageUri, setImageUri] = useState<string>('');
  const navigation = useNavigation();

  const handleImagePicked = useCallback((uri: string) => {
    setImageUri(uri);
  }, []);

  const handleSave = () => {
    Alert.alert("Saved", "Your diary entry has been saved.");
  };

  const currentDate = moment().format('YYYY년 MM월 DD일 (ddd) A hh:mm');

  return (
    <View style={styles.container}>
      <Header 
        currentDate={currentDate} 
        onClose={() => navigation.goBack()} 
        onSave={handleSave}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          style={styles.titleInput}
          placeholder="제목"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.contentInput}
          placeholder="나만의 소중한 일상을 기록해보세요 :)"
          value={content}
          onChangeText={setContent}
          multiline
        />
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={styles.imagePreview}
            onError={() => setImageUri('')}
          />
        ) : null}
      </ScrollView>
      <Footer onImagePicked={handleImagePicked} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    padding: 15,
  },
  titleInput: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
  contentInput: {
    fontSize: 16,
    flex: 1,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
});

export default DiaryWriting;
