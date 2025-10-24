import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CalendarScreen from '../screens/CalendarScreen';
import MainLayout from '../layout/MainLayout';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={() => null}>
      <Tab.Screen
        name="Home"
        children={(props) => (
          <MainLayout {...props}>
            <HomeScreen {...props} />
          </MainLayout>
        )}
      />
      <Tab.Screen
        name="Profile"
        children={(props) => (
          <MainLayout {...props}>
            <ProfileScreen {...props} />
          </MainLayout>
        )}
      />
      <Tab.Screen
        name="Calendar"
        children={(props) => (
          <MainLayout {...props}>
            <CalendarScreen {...props} />
          </MainLayout>
        )}
      />
    </Tab.Navigator>
  );
}
