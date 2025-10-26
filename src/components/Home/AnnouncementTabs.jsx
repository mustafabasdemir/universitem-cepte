import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import announcementsData from '../../data/announcements.json';

export default function AnnouncementTabs() {
  const [activeTab, setActiveTab] = useState('internal'); // kurum içi / dışı

  const filteredData = announcementsData.filter(
    (item) => item.type === activeTab
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text allowFontScaling={false} style={styles.title}>{item.title}</Text>
      <Text allowFontScaling={false} style={styles.date}>{item.date}</Text>
      <Text allowFontScaling={false} style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Tab butonları */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'internal' && styles.activeTab]}
          onPress={() => setActiveTab('internal')}
        >
          <Text
            allowFontScaling={false}
            style={[styles.tabText, activeTab === 'internal' && styles.activeText]}
          >
            Kurum İçi Duyurular
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'external' && styles.activeTab]}
          onPress={() => setActiveTab('external')}
        >
          <Text
            allowFontScaling={false}
            style={[styles.tabText, activeTab === 'external' && styles.activeText]}
          >
            Kurum Dışı Duyurular
          </Text>
        </TouchableOpacity>
      </View>

      {/* Duyuru listesi */}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: hp('5%') }}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp('1.5%'), 
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    borderRadius: wp('8%'), 
    marginHorizontal: wp('1%'),
    padding: wp('1.3%'), 
    justifyContent: 'space-between',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: hp('1%'), 
    borderRadius: wp('6.5%'), 
  },
  activeTab: {
    backgroundColor: '#007BFF',
  },
  tabText: {
    fontSize: wp('3%'), 
    color: '#555',
    fontWeight: '500',
  },
  activeText: {
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: wp('4%'), 
    marginHorizontal: wp('1%'),
    marginVertical: hp('0.5%'), 
    padding: wp('2%'), 
    borderWidth: 1,
    borderColor: '#E0E0E0', 
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1, 
  },
  title: {
    fontSize: wp('3.2%'), 
    fontWeight: '600',
  },
  date: {
    fontSize: wp('2.8%'), 
    color: '#888',
    marginVertical: hp('0.6%'),
  },
  description: {
    fontSize: wp('3%'), 
    color: '#333',
  },
});
