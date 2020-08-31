import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.secondBox}>
        <Text style={styles.text}>안녕 나는 APP.JS 야</Text>
      </View>
      <Text style={styles.text}>안녕 나는 APP.JS 야</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondBox: {
    flex:3,
    backgroundColor: 'yellow',

  },
  text: {
    flex:0.5,
    backgroundColor: 'bisque',
    color: 'white',
  },
});
