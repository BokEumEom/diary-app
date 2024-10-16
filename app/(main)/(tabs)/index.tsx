import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import entries from '@/constants/entries'; // Assume entries data is moved to a separate file
import SectionHeader from '@/components/diary/SectionHeader';
import Entry from '@/components/diary/Entry';
import Separator from '@/components/diary/Separator';
import FAB from '@/components/diary/FAB';

const sections = ['Today', 'Yesterday', 'Last week'];

const DiaryScreen = () => {
  const renderList = () => (
    <FlatList
      data={entries}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Entry item={item} />}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={() => (
        <View>
          {sections.map((section) => (
            <View key={section}>
              <SectionHeader section={section} />
              {entries
                .filter((entry) => entry.section === section)
                .map((entry) => (
                  <View key={entry.id}>
                    <Entry item={entry} />
                    <Separator />
                  </View>
                ))}
            </View>
          ))}
        </View>
      )}
    />
  );

  return (
    <View style={styles.container}>
      {renderList()}
      <FAB />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default DiaryScreen;
