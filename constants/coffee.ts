// react_native/constants/coffee.ts
import { ImageSourcePropType } from 'react-native';

export interface Category {
  id: number;
  title: string;
}

export interface CoffeeItem {
  id: number;
  name: string;
  price: string;
  volume: string;
  stars: string;
  image: ImageSourcePropType; // Use appropriate type for require images
  description: string;
}

export const categories: Category[] = [
  {
    id: 1,
    title: 'Cappuccino',
  },
  {
    id: 2,
    title: 'Latte',
  },
  {
    id: 3,
    title: 'Espresso',
  },
  {
    id: 4,
    title: 'Mocha',
  },
  {
    id: 5,
    title: 'Americano',
  },
];

export const coffeeItems: CoffeeItem[] = [
  {
    id: 1,
    name: 'Black Coffee',
    price: '25.50',
    volume: '116 ml',
    stars: '4.6',
    image: require('@/assets/images/coffee/black.webp'), // Ensure correct file extension
    description: 'The taste of coffee can vary depending on factors such as the type of beans.',
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: '25.50',
    volume: '116 ml',
    stars: '4.6',
    image: require('@/assets/images/coffee/latte.webp'),
    description: 'The taste of coffee can vary depending on factors such as the type of beans.',
  },
  {
    id: 3,
    name: 'Espresso',
    price: '25.50',
    volume: '116 ml',
    stars: '4.6',
    image: require('@/assets/images/coffee/espresso.webp'),
    description: 'The taste of coffee can vary depending on factors such as the type of beans.',
  },
  {
    id: 4,
    name: 'Americano',
    price: '25.50',
    volume: '116 ml',
    stars: '4.6',
    image: require('@/assets/images/coffee/americano.webp'),
    description: 'The taste of coffee can vary depending on factors such as the type of beans.',
  },
  {
    id: 5,
    name: 'Mocha',
    price: '25.50',
    volume: '116 ml',
    stars: '4.6',
    image: require('@/assets/images/coffee/mocha.webp'),
    description: 'The taste of coffee can vary depending on factors such as the type of beans.',
  },
];
