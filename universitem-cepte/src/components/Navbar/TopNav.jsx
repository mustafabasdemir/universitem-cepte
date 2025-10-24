import React, { useState } from 'react';
import { View, Image, StyleSheet, Platform, Pressable, Text, useColorScheme } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTranslation } from 'react-i18next';
import i18n from '../../locales/i18n';

const LANGS = [
  { code: 'tr', label: '🇹🇷 TR' },
  { code: 'en', label: '🇺🇸 EN' },
];

export default function TopNav() {
  const { i18n: i18next } = useTranslation();
  const [language, setLanguage] = useState(i18next.language);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: isDark ? '#1b1b1b' : '#fff',
          borderBottomColor: isDark ? '#333' : '#ddd',
        },
      ]}
    >
      {/* Logo */}
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Dil degistir */}
      <View
        style={[
          styles.toggleWrapper,
          { backgroundColor: isDark ? '#2b2b2b' : '#EAEAEA' },
        ]}
      >
        {LANGS.map((l) => {
          const active = l.code === language;
          return (
            <Pressable
              key={l.code}
              style={[styles.toggleBtn, active && styles.activeBtn]}
              onPress={() => changeLanguage(l.code)}
            >
              <Text
                allowFontScaling={false}
                style={[
                  styles.toggleText,
                  active && styles.activeText,
                  { color: active ? '#fff' : isDark ? '#ccc' : '#555' },
                ]}
              >
                {l.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    borderBottomWidth: 0.5,
  },
  logo: {
    width: wp('18%'),
    height: hp('5%'),
    marginLeft: wp('2%'),
  },
  toggleWrapper: {
    flexDirection: 'row',
    borderRadius: 14,
    overflow: 'hidden',
    width: wp('25%'),
    height: Platform.OS === 'ios' ? hp('4%') : hp('4%'),
  },
  toggleBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeBtn: {
    backgroundColor: '#3498db',
  },
  toggleText: {
    fontSize: hp('1.6%'),
    fontWeight: '500',
  },
  activeText: {
    fontWeight: '700',
  },
});
