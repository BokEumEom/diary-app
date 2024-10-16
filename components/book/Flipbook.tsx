import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

interface DiaryEntry {
  id: string;
  date: string;
  content: string;
}

interface FlipbookDiaryProps {
  entries: DiaryEntry[];
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const PERSPECTIVE = 1000;
const ROTATION_ANGLE = 180;

export const FlipbookDiary: React.FC<FlipbookDiaryProps> = ({ entries }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progress = useSharedValue(0);
  const isFlipping = useRef(false);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isFlipping.current = false;
    })
    .onUpdate((event) => {
      if (!isFlipping.current) {
        progress.value = interpolate(
          event.translationX,
          [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
          [ROTATION_ANGLE, 0, -ROTATION_ANGLE],
          Extrapolation.CLAMP
        );
      }
    })
    .onEnd((event) => {
      if (Math.abs(event.velocityX) > 500 || Math.abs(event.translationX) > SCREEN_WIDTH / 3) {
        isFlipping.current = true;
        if (event.velocityX > 0 && currentIndex > 0) {
          progress.value = withTiming(-ROTATION_ANGLE, { duration: 500, easing: Easing.out(Easing.cubic) }, () => {
            setCurrentIndex(prevIndex => prevIndex - 1);
            progress.value = 0;
          });
        } else if (event.velocityX < 0 && currentIndex < entries.length - 1) {
          progress.value = withTiming(ROTATION_ANGLE, { duration: 500, easing: Easing.out(Easing.cubic) }, () => {
            setCurrentIndex(prevIndex => prevIndex + 1);
            progress.value = 0;
          });
        } else {
          progress.value = withTiming(0, { duration: 300, easing: Easing.out(Easing.cubic) });
        }
      } else {
        progress.value = withTiming(0, { duration: 300, easing: Easing.out(Easing.cubic) });
      }
    });

  const frontStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(
      progress.value,
      [0, ROTATION_ANGLE],
      [0, -ROTATION_ANGLE],
      Extrapolation.CLAMP
    );
    return {
      transform: [
        { perspective: PERSPECTIVE },
        { rotateY: `${rotateY}deg` },
      ],
    };
  });

  const backStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(
      progress.value,
      [-ROTATION_ANGLE, 0],
      [ROTATION_ANGLE, 0],
      Extrapolation.CLAMP
    );
    return {
      transform: [
        { perspective: PERSPECTIVE },
        { rotateY: `${rotateY}deg` },
      ],
      opacity: interpolate(Math.abs(progress.value), [0, ROTATION_ANGLE / 2, ROTATION_ANGLE], [0, 0.2, 1], Extrapolation.CLAMP),
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <View style={styles.container}>
        <Animated.View style={[styles.page, frontStyle]}>
          {/* Front page content */}
        </Animated.View>
        <Animated.View style={[styles.page, styles.backPage, backStyle]}>
          {/* Back page content */}
        </Animated.View>
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGHT * 0.7,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: 'absolute',
  },
  backPage: {
    backfaceVisibility: 'hidden',
  },
});