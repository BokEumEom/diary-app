import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { menuItems } from '@/constants/DrawerItems';
import { Link, useNavigation } from 'expo-router';

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
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
          <Link key={index} href={`/(main)/${item.text.toLowerCase()}`} asChild>
            <Pressable style={styles.menuItem}>
              <Ionicons name={`${item.icon}-outline`} size={24} color="gray" />
              <Text style={styles.menuText}>{item.text}</Text>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
      <Pressable style={styles.logoutButton} onPress={() => {
        // 로그아웃 로직 구현
        navigation.navigate('(auth)');
      }}>
        <Ionicons name="log-out-outline" size={24} color="#ffa5a5" />
        <Text style={styles.logoutText}>로그아웃</Text>
      </Pressable>
    </DrawerContentScrollView>
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

export default CustomDrawerContent;