import React, { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MainLayout from '@/components/layouts/MainLayout';
import { getWeatherBackgroundImage } from '@/services/weather.service';
import { ImageBackground, StyleSheet, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [backgroundImage, setBackgroundImage] = useState<any>(null);
  const [isWeatherTab, setIsWeatherTab] = useState<boolean>(false);

  useEffect(() => {
    const fetchWeatherBackground = async () => {
      const background = await getWeatherBackgroundImage();
      setBackgroundImage(background);
    };

    fetchWeatherBackground();
  }, []);

  return (
    <View style={styles.container}>
      {isWeatherTab && backgroundImage && (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage} />
      )}
      <MainLayout isTransparent={isWeatherTab}>
        <Tabs
          screenListeners={{
            state: (e) => {
              const index = e.data.state.index;
              const routeName = e.data.state.routeNames[index];
              setIsWeatherTab(routeName === 'weather');
            },
          }}
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,
            
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'time' : 'time-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="calendar"
            options={{
              title: 'Calendar',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="coffee"
            options={{
              title: 'Coffee',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'cafe' : 'cafe-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="snap"
            options={{
              title: 'Snap',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'camera' : 'camera-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="photo"
            options={{
              title: 'Photo',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'images' : 'images-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="weather"
            options={{
              title: 'Weather',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'sunny' : 'sunny-outline'} color={color} />
              ),
            }}
          />
        </Tabs>
      </MainLayout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});
