import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, TextInput } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import './src/locales/i18n';

// 🔠 Font scaling'i devre dışı bırak
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
