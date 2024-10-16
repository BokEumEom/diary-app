// react_native/components/common/ActionButtons.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, Text, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { getWeather } from '@/services/weather.service';

interface ActionButtonsProps {
  change: () => void;
  isFrontView: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ change, isFrontView }) => {
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState<{ icon: string; description: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    setDate(formattedDate);

    // Fetch the weather data
    const fetchWeather = async () => {
      try {
        // Replace with your actual location or fetch dynamically
        const lat = '37.7749'; // Example: San Francisco latitude
        const lon = '-122.4194'; // Example: San Francisco longitude
        const weatherData = await getWeather(lat, lon);

        setWeather({
          icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
          description: weatherData.weather[0].description,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.today}>
        {loading ? (
          <ActivityIndicator size="small" color="gray" />
        ) : (
          <>
            {weather && <FontAwesome name="sun-o" size={24} color="gray" />}
            <View style={styles.todayText}>
              <Text style={styles.todayLabel}>Today</Text>
              <Text style={styles.todayDate}>{date}</Text>
              {weather && (
                <View style={styles.weatherContainer}>
                </View>
              )}
            </View>
          </>
        )}
      </View>
      <View style={styles.buttonGroup}>
        <Link href="/(main)/diary/post" asChild>
          <Pressable style={styles.button}>
            <FontAwesome name="pencil" size={24} color="white" />
          </Pressable>
        </Link>
        <Link href="/(main)/diary/book" asChild>
          <Pressable style={styles.button}>
            <FontAwesome name="book" size={24} color="white" />
          </Pressable>
        </Link>
        <Pressable
          style={[styles.button, { backgroundColor: isFrontView ? 'orange' : 'cyan' }]}
          onPress={change}
        >
          <FontAwesome name={isFrontView ? "calendar" : "undo"} size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  today: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
  },
  todayText: {
    marginLeft: 10,
  },
  todayLabel: {
    color: 'gray',
  },
  todayDate: {
    fontWeight: '500',
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherText: {
    marginLeft: 5,
    color: 'gray',
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
});

export default ActionButtons;
