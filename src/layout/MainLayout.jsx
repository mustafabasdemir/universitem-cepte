import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopNav from '../components/Navbar/TopNav';
import BottomNav from '../components/Navbar/BottomNav';

export default function MainLayout({ children, navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <TopNav />
      <View style={styles.container}>{children}</View>
      <BottomNav navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
});
