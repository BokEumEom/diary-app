import React, { useState } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SearchAndMenu from '@/components/common/SearchAndMenu';
import FrontView from '@/components/calendar/FrontView';
import BackView from '@/components/calendar/BackView';
import ActionButtons from '@/components/common/ActionButtons';

const { width } = Dimensions.get('window');

const HomePage: React.FC = () => {
  const [isFrontView, setIsFrontView] = useState(true);
  const controller = useState(new Animated.Value(0))[0];
  const [currentYear, setCurrentYear] = useState(2024);

  const switchView = () => {
    setIsFrontView(!isFrontView);
    Animated.timing(controller, {
      toValue: isFrontView ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <SearchAndMenu />
      <View style={styles.monthCards}>
        <FlatList
          horizontal
          data={Array.from({ length: 12 }, (_, i) => i + 1)}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <Animated.View
              style={[
                styles.card,
                {
                  transform: [
                    {
                      rotateY: controller.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '180deg'],
                      }),
                    },
                  ],
                },
              ]}
            >
              {isFrontView ? (
                <FrontView monthIndex={item} />
              ) : (
                <Animated.View style={{
                  transform: [{
                    rotateY: '180deg',
                  }],
                }}>
                  <BackView monthIndex={item} />
                </Animated.View>
              )}
            </Animated.View>
          )}
          pagingEnabled
          decelerationRate="fast"
        />
      </View>
      <ActionButtons change={switchView} isFrontView={isFrontView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  yearPicker: {
    height: 50,
    width: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  monthCards: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    width: width * 0.78,
    marginHorizontal: width * 0.11,
  },
});

export default HomePage;
