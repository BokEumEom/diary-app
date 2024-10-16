// react_native/app/(main)/diary/post.tsx
import React from 'react';
import DiaryWriting from '@/components/diary/DiaryWriting';
import MainLayout from '@/components/layouts/MainLayout';

const Diary = () => {
  return (
    <MainLayout>
      <DiaryWriting />
    </MainLayout>
  );
};

export default Diary;