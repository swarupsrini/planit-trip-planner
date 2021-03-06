import React from 'react';
import { StyleSheet, View, ScrollView  } from 'react-native';
import Calendar from './../components/Calendar';
import TimePicker from './../components/TimePicker';

export default function DateTimeContainer() {
  return (
      <ScrollView
      style={StyleSheet.absoluteFill}
      contentContainerStyle={styles.scrollview}
      >
          <Calendar style={styles.calendar}/>
          <TimePicker />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  calendar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    flex: 1,
  },
});
