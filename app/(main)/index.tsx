// react_native/app/(main)/onboard/index.tsx
import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Reanimated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { Image } from 'expo-image';
import Button from '@/components/common/Button';

const { width, height } = Dimensions.get('window');

const pages = [
  {
    image: require('@/assets/images/image0.jpg'),
    title: 'Explore the world',
    subtitle: 'Discover new places and experiences',
  },
  {
    image: require('@/assets/images/image1.jpg'),
    title: 'Capture moments',
    subtitle: 'Create lasting memories',
  },
  {
    image: require('@/assets/images/image2.jpg'),
    title: 'Share your journey',
    subtitle: 'Connect with friends and family',
  },
];

const OnboardingScreen: React.FC = () => {
  const scrollX = useSharedValue(0);
  const scrollRef = useRef<Reanimated.ScrollView>(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const AnimatedImage = Reanimated.createAnimatedComponent(Image);

  return (
    <View style={styles.container}>
      <Reanimated.ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        {pages.map((page, index) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

          const imageStyle = useAnimatedStyle(() => {
            const scale = interpolate(
              scrollX.value,
              inputRange,
              [0.8, 1, 0.8],
              Extrapolation.CLAMP
            );
            return { transform: [{ scale }] };
          });

          const textStyle = useAnimatedStyle(() => {
            const translateY = interpolate(
              scrollX.value,
              inputRange,
              [height / 2, 0, -height / 2],
              Extrapolation.CLAMP
            );
            const opacity = interpolate(
              scrollX.value,
              inputRange,
              [0, 1, 0],
              Extrapolation.CLAMP
            );
            return { transform: [{ translateY }], opacity };
          });

          return (
            <View style={styles.page} key={index}>
              <AnimatedImage source={page.image} style={[styles.image, imageStyle]} />
              <Reanimated.View style={[styles.textContainer, textStyle]}>
                <Text style={styles.title}>{page.title}</Text>
                <Text style={styles.subtitle}>{page.subtitle}</Text>
              </Reanimated.View>
            </View>
          );
        })}
      </Reanimated.ScrollView>

      <View style={styles.indicatorContainer}>
        {pages.map((_, index) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
          const indicatorStyle = useAnimatedStyle(() => {
            const width = interpolate(
              scrollX.value,
              inputRange,
              [10, 20, 10],
              Extrapolation.CLAMP
            );
            const opacity = interpolate(
              scrollX.value,
              inputRange,
              [0.5, 1, 0.5],
              Extrapolation.CLAMP
            );
            return { width, opacity };
          });

          return <Reanimated.View key={index} style={[styles.indicator, indicatorStyle]} />;
        })}
      </View>

      <View style={styles.buttonContainer}>
        <Link href="/(auth)/signup" asChild>
          <Button title="Get Started" buttonClassName="bg-gray-800 mt-3" />
        </Link>
        <Link href="/(auth)/login" asChild>
          <Pressable>
            <Text style={styles.skipText}>Skip</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  page: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: height * 0.4,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 200, // 인디케이터 위치를 버튼 위로 조정
  },
  indicator: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  skipText: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default OnboardingScreen;
