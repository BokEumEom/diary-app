// react_native/app/(main)/diary/book.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlipbookDiary } from '@/components/book/Flipbook';

const FlipbookScreen = () => {
  const diaryEntries = [
    { id: '1', date: '2024-07-19', content: '오늘은 날씨가 좋아서 공원에 다녀왔다. 햇살이 따뜻하게 내리쬐는 가운데 산책을 하며 마음의 평화를 느꼈다. 공원에서 만난 귀여운 강아지들과 잠깐 놀기도 했다. 이런 여유로운 시간이 더 많았으면 좋겠다.' },
    { id: '2', date: '2024-07-20', content: '새로운 프로젝트를 시작했다. 기대된다. 팀원들과 첫 회의를 가졌는데, 모두가 열정적이고 아이디어가 넘쳤다. 이 프로젝트를 통해 많은 것을 배우고 성장할 수 있을 것 같다. 앞으로의 과정이 기대된다.' },
    { id: '3', date: '2024-07-21', content: '오늘은 집에서 쉬며 책을 읽었다. 오랜만에 여유를 가지니 마음이 편안해졌다. 읽은 책에서 새로운 관점을 얻을 수 있었고, 이를 일상에 적용해 보고 싶다는 생각이 들었다.' },
  ];

  return (
    <View style={styles.container}>
      <FlipbookDiary entries={diaryEntries} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default FlipbookScreen;