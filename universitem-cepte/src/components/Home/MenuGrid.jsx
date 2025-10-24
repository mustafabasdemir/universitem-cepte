import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome5 } from '@expo/vector-icons';
import menuData from '../../data/menuData.json';

export default function MenuGrid() {
  //tiklama tarayici ac
  const handlePress = (url) => {
    if (url) {
      Linking.openURL(url).catch((err) => console.error("URL açılamadı:", err));
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={() => handlePress(item.link)}>
      <LinearGradient colors={['#ffffff', '#f2f0ff']} style={styles.gradientBox}>
        <FontAwesome5 name={item.icon} size={wp('6%')} color="#3c3c3c" />
        <Text allowFontScaling={false} style={styles.title}>
          {item.title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        key={4}
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4} // 4 sutun
        contentContainerStyle={styles.grid}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5FF',
    borderRadius: 20,
    marginTop: hp('2%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('2%'),
  },
  grid: {
    justifyContent: 'center',
  },
  item: {
    flex: 1 / 4, // her satır 4 kutu
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('1%'),
  },
  gradientBox: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    paddingHorizontal: wp('1.5%'),
  },
  title: {
    marginTop: hp('0.7%'),
    fontSize: hp('1.2%'),
    fontWeight: '500',
    color: '#3c3c3c',
    textAlign: 'center',
  },
});
