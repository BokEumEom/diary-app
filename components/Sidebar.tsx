import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { closeSidebar } from '@/store/sidebarSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { menuItems } from '@/constants/DrawerItems';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const Sidebar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isSidebarVisible = useSelector((state: RootState) => state.sidebar.isVisible);
  const sidebarAnim = useSharedValue(-width);
  const [activeMenuItem, setActiveMenuItem] = useState('');

  useEffect(() => {
    sidebarAnim.value = withTiming(isSidebarVisible ? 0 : -width, {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    });
  }, [isSidebarVisible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: sidebarAnim.value }],
  }));

  return (
    <>
      {isSidebarVisible && (
        <TouchableWithoutFeedback onPress={() => dispatch(closeSidebar())}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
      <Animated.View style={[styles.sidebar, animatedStyle]}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.profileSection}>
            <View style={styles.profileImage}>
              <Ionicons name="person" size={40} color="white" />
            </View>
            <View style={styles.profileInfo}>
              <Link href="/(main)/profile" asChild>
                <Pressable>
                  <Text style={styles.profileName}>익명</Text>
                  <Text style={styles.profileEmail}>anonymous@example.com</Text>
                </Pressable>
              </Link>
            </View>
            <Pressable style={styles.settingsIcon}>
              <Ionicons name="settings-outline" size={24} color="white" />
            </Pressable>
          </View>
          <ScrollView style={styles.menuScroll}>
            {menuItems.map((item, index) => (
              <Pressable
                key={index}
                style={[styles.menuItem, activeMenuItem === item.text && styles.activeMenuItem]}
                onPress={() => setActiveMenuItem(item.text)}
              >
                <Ionicons name={`${item.icon}${activeMenuItem !== item.text ? '-outline' : ''}`} size={24} color={activeMenuItem === item.text ? '#ffa5a5' : 'gray'} />
                <Text style={[styles.menuText, activeMenuItem === item.text && styles.activeMenuText]}>{item.text}</Text>
              </Pressable>
            ))}
          </ScrollView>
          <Pressable style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={24} color="#ffa5a5" />
            <Text style={styles.logoutText}>로그아웃</Text>
          </Pressable>
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 280,
    backgroundColor: 'white',
    zIndex: 20,
    elevation: 5,
  },
  safeArea: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffa5a5',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    marginLeft: 15,
    flex: 1,
  },
  profileName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
  },
  settingsIcon: {
    padding: 5,
  },
  menuScroll: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  activeMenuItem: {
    backgroundColor: 'rgba(255,165,165,0.1)',
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  activeMenuText: {
    color: '#ffa5a5',
    fontWeight: 'bold',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  logoutText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#ffa5a5',
    fontWeight: 'bold',
  },
});

export default Sidebar;
