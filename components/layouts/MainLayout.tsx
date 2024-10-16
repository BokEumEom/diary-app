import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomHeader from '@/components/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MainLayoutProps {
  children: React.ReactNode;
  isTransparent?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, isTransparent = false }) => {
  return (
    <SafeAreaView style={isTransparent ? styles.transparentContainer : styles.container} edges={['top']}>
      <CustomHeader isTransparent={isTransparent} />
      <View style={isTransparent ? styles.transparentContent : styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6B6B',
  },
  transparentContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  transparentContent: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default MainLayout;
