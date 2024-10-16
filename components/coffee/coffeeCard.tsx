// react_native/components/coffee/coffeeCard.tsx
import React from 'react';
import { View, Text, Image, Pressable, ImageSourcePropType } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CoffeeCardProps {
  item: {
    id: number;
    name: string;
    description: string;
    image: ImageSourcePropType;
    stars: number;
    volume: string;
    price: number;
  };
}

export default function CoffeeCard({ item }: CoffeeCardProps) {
  return (
    <View style={{
      borderRadius: 20,
      backgroundColor: '#824918',
      height: 400,
      width: 250,
      marginHorizontal: 20,
      shadowColor: 'black',
      shadowRadius: 15,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.3,
      padding: 10,
    }}>
      <View style={{
        shadowColor: 'black',
        shadowRadius: 30,
        shadowOffset: { width: 0, height: 40 },
        shadowOpacity: 0.8
      }}
        className='flex-row justify-center -mt-15'
      >
        <Image source={item.image} style={{ height: 100, width: 100, borderRadius: 50 }} />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>
          {item.name}
        </Text>
        <View style={{ backgroundColor: 'rgba(255,255,255,0.2)', flexDirection: 'row', alignItems: 'center', borderRadius: 30, padding: 5, paddingHorizontal: 10, marginVertical: 10 }}>
          <Ionicons name="star" size={15} color="#fff" />
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginLeft: 5 }}>
            {item.stars}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Text style={{ fontSize: 16, color: 'white', fontWeight: '600', opacity: 0.6 }}>
            Volume
          </Text>
          <Text style={{ fontSize: 16, color: 'white', fontWeight: '600', marginLeft: 5 }}>
            {item.volume}
          </Text>
        </View>
        <View style={{
          backgroundColor: '#824918',
          shadowColor: 'black',
          shadowRadius: 25,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>${item.price}</Text>
          <Pressable style={{
            shadowColor: 'black',
            shadowRadius: 40,
            shadowOffset: { width: -20, height: -10 },
            shadowOpacity: 1,
            padding: 15,
            backgroundColor: 'white',
            borderRadius: 50
          }}>
            <Ionicons name='add' size={25} color="#000" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
