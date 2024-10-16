// react_native/app/(main)/(tabs)/coffee.tsx
import { View, Text, Image, Pressable, TextInput, FlatList, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { categories, coffeeItems } from '@/constants/coffee';
import Carousel from 'react-native-reanimated-carousel';
import CoffeeCard from '@/components/coffee/coffeeCard';

const { width } = Dimensions.get('window');

const CategoryButton = ({ title, isActive, onPress }) => {
  const activeTextClass = isActive ? 'text-white' : 'text-gray-700';
  return (
    <Pressable
      onPress={onPress}
      style={{ backgroundColor: isActive ? '#CCD968' : 'rgba(0,0,0,0.07)' }}
      className='p-4 px-5 rounded-full mr-2 shadow-orange-100'
    >
      <Text className={`font-semibold ${activeTextClass}`}>{title}</Text>
    </Pressable>
  );
};

const SearchBar = () => (
  <View className='flex-row justify-center rounded-full p-1 bg-slate-200'>
    <TextInput placeholder='Search' className='p-4 flex-1 font-semibold text-gray-700' />
    <Pressable className='bg-white rounded-full p-2'>
      <Ionicons name="search" size={28} color="#FF6B6B" />
    </Pressable>
  </View>
);

export default function CoffeeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className='flex-1 relative bg-white'>
      <Image
        source={require('@/assets/images/weather_app/bg.png')}
        className='w-full absolute opacity-10'
        style={{ height: 240 }}
      />
      {/* avatar and bell icon */}
      <View className='py-4 px-4 flex-row justify-between items-center'>
        <Image
          source={require('@/assets/images/weather_app/avatar.png')}
          className='h-9 w-9 rounded-full'
        />
        <View className='flex-row items-center space-x-2'>
          <FontAwesome6 name="location-dot" size={28} color="#FF6B6B" />
          <Text className='text-base font-semibold'>Seoul, KR</Text>
        </View>
        <FontAwesome6 name="bell" size={28} color="#FF6B6B" />
      </View>
      {/* search bar */}
      <View className='mx-5 mt-14'>
        <SearchBar />
      </View>
      {/* categories */}
      <View className='px-5 mt-6'>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CategoryButton
              title={item.title}
              isActive={item.id === activeCategory}
              onPress={() => setActiveCategory(item.id)}
            />
          )}
        />
      </View>
      {/* Coffee cards */}
      <View className='mt-16 py-2 items-center'>
        <Carousel
          loop={false}
          width={width * 0.75}  // Adjusted width
          height={400}
          data={coffeeItems}
          renderItem={({ item }) => <CoffeeCard item={item} />}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
        />
      </View>
    </View>
  );
}