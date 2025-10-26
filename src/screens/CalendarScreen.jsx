import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import calendarData from '../data/academicCalendar.json';
import { useTranslation } from 'react-i18next';

export default function CalendarScreen() {
  const { t } = useTranslation();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.dateSection}>
        <Text allowFontScaling={false} style={styles.dateText}>
          {item.date}
        </Text>
      </View>
      <View style={styles.eventSection}>
        <Text allowFontScaling={false} style={styles.eventText}>
          {item.event}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#852A2F', '#A63A3F']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerContainer}
      >
        <Text allowFontScaling={false} style={styles.headerText}>
          {t('university_academic_calendar') || 'Üniversite Akademik Takvimi'}
        </Text>
      </LinearGradient>

      <FlatList
        data={calendarData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9fc",
    paddingHorizontal: wp('5%'),
    paddingTop: hp('1%'),
    paddingBottom: hp("5%"),
  },
  headerContainer: {
    width: '100%',
    paddingVertical: hp('1.5%'),
    borderRadius: wp('3%'),
    marginBottom: hp('1%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: wp('3%'),
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  listContainer: {
    paddingBottom: hp('5%'),
  },
  card: {
    borderRadius: wp('3%'),
    overflow: 'hidden',
    marginVertical: hp('1%'),
    backgroundColor: '#f1f1f1',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  dateSection: {
    backgroundColor: '#852A2F',
    paddingVertical: hp('1.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: wp('2.5%'),
    textAlign: 'center',
  },
  eventSection: {
    backgroundColor: '#fff',
    paddingVertical: hp('1.8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventText: {
    color: '#000',
    fontSize: wp('2.5%'),
    fontWeight: '500',
    textAlign: 'center',
  },
});
