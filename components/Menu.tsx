// react_native/components/Menu.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const Menu = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.menu}>
      <View style={styles.profileSection}>
        <View style={styles.profileImage}>
          <Ionicons name="person" size={40} color="white" />
        </View>
        <Text style={styles.profileName}>익명</Text>
        <Pressable style={styles.settingsIcon}>
          <Ionicons name="settings-outline" size={24} color="white" />
        </Pressable>
      </View>
      {[
        { icon: 'heart-outline', text: '프리미엄 혜택 보기' },
        { icon: 'person-outline', text: '프로필' },
        { icon: 'star-outline', text: '즐겨찾기' },
        { icon: 'location-outline', text: '특별한 장소' },
        { icon: 'pricetag-outline', text: '해시태그' },
        { icon: 'folder-outline', text: '카테고리' },
        { icon: 'people-outline', text: '다른 일상' },
        { icon: 'wifi-outline', text: '구독중인 일상' },
        { icon: 'person-add-outline', text: '구독자 관리' },
        { icon: 'heart', text: '좋아한 일상' },
        { icon: 'cloud-upload-outline', text: '데이터 백업 및 복원' },
        { icon: 'lock-closed-outline', text: '암호 잠금' },
      ].map((item, index) => (
        <Pressable key={index} style={styles.menuItem}>
          <Text style={styles.menuText}>{item.text}</Text>
        </Pressable>
      ))}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffa5a5',
    padding: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  settingsIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Menu;
