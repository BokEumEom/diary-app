import React from 'react';
import { View, StyleSheet } from 'react-native';
import Sidebar from '@/components/Sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

interface DrawerLayoutProps {
  children: React.ReactNode;
}

const DrawerLayout: React.FC<DrawerLayoutProps> = ({ children }) => {
  const isSidebarVisible = useSelector((state: RootState) => state.sidebar.isVisible);

  return (
    <View style={styles.container}>
      <Sidebar />
      <View style={[styles.content, isSidebarVisible && styles.contentWhenDrawerOpen]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentWhenDrawerOpen: {
    opacity: 0.3,
  },
});

export default DrawerLayout;