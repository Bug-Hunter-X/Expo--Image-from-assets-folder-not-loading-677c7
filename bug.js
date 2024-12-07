import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});