import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SearchAndMenu: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSpace} />
      <View style={styles.centerContainer}>
        <Pressable>
          <MaterialIcons name="home" size={30} color="black" />
        </Pressable>
      </View>
      <View style={styles.rightContainer}>
        <Pressable style={styles.iconMargin}>
          <MaterialIcons name="person" size={30} color="black" />
        </Pressable>
        <Pressable>
          <MaterialIcons name="settings" size={30} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  leftSpace: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconMargin: {
    marginRight: 16,
  },
});

export default SearchAndMenu;
