import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Carousel from '../components/Home/Carousel';
import MenuGrid from '../components/Home/MenuGrid';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Carousel />
      <MenuGrid />
      <Text style={styles.sectionTitle} allowFontScaling={false}>
        Ana Sayfa İçeriği
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "3%",
    paddingBottom: 40,
    backgroundColor: '#fff',  //F5F5FF
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
  },
});
