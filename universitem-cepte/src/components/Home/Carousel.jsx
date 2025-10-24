import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import carouselData from '../../data/carouselData.json';

const { width } = Dimensions.get('window');

export default function Carousel() {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Otomatik geçiş
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % carouselData.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover" 
      />

      {/* blur efekt */}
       <LinearGradient
        colors={[
          'rgba(0, 0, 0, 0)',      // üst 
          'rgba(0, 0, 0, 0.3)',   // orta
          'rgba(0, 0, 0, 0.76)',    // orta alt
          'rgba(0,0,0,0.85)'    // alt
        ]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.overlay}
      />

      <View style={styles.textContainer}>
        <Text allowFontScaling={false} style={styles.title}>
          {item.title}
        </Text>
        <Text allowFontScaling={false} style={styles.subtitle}>
          {item.subtitle}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        ref={flatListRef}
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />

      {/* Nokta göstergesi */}
      <View style={styles.dotsContainer}>
        {carouselData.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    height: hp('35%'),
    marginTop: hp('0%'),
  },
 card: {
  width: width * 0.94,     
  height: hp('30%'),       
  marginHorizontal: width * 0.0, 
  borderRadius: 16,
  overflow: 'hidden',
  backgroundColor: '#000',
  elevation: 4,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 6,
},
carouselContainer: {
  height: hp('32%'), 
  alignItems: 'center', 
},
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '45%', // blur alan
  },
  textContainer: {
    position: 'absolute',
    bottom: hp('0%'),
    left: wp('5%'),
    right: wp('5%'),
  },
  title: {
    color: '#fff',
    fontSize: hp('1.8%'),
    fontWeight: '800',
    marginBottom: hp('0%'),
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    color: '#e0e0e0',
    fontSize: hp('1%'),
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('1%'),
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#bbb',
  },
  activeDot: {
    backgroundColor: '#007bff',
  },
});
