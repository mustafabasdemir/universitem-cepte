import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BottomNav from '../components/Navbar/BottomNav';
import TopNav from '../components/Navbar/TopNav';
import MainLayout from '../layout/MainLayout';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <MainLayout>
      <TopNav />
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <BottomNav {...props} />} 
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </MainLayout>
  );
}
