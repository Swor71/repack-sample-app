import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function FirstApp() {
  return (
    <View style={styles.container}>
      <Text>First App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 1,
    margin: 6,
  },
});

export default FirstApp;
