import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function TopNav() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('appTitle')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp('7%'),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: hp('2.2%'),
    fontWeight: '600',
  },
});
