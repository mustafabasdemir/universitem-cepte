import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TopNav() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Üniversitem Cepte</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
