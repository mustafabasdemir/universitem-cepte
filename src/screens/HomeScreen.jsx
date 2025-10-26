
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Carousel from '../components/Home/Carousel';
import MenuGrid from '../components/Home/MenuGrid';
import AnnouncementTabs from "../components/Home/AnnouncementTabs";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function HomeScreen() {
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Carousel />
          <MenuGrid />
          <AnnouncementTabs />
        </>
      }
      data={[]} // boş veri çünkü sadece header’ı göstereceğiz
      renderItem={null}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('3%'),
    paddingBottom: 40,
    backgroundColor: '#fff',  //F5F5FF
    paddingBottom: hp("10%"),
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
  },
});




