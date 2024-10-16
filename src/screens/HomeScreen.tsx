import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import CustomBottomSheet from '../components/CustomBottomSheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getScreenPercent} from '../utils/responsive';
import Map from '../components/Map';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Pressable style={styles.icon}>
        <Ionicons name="menu" size={24} />
      </Pressable> */}
      <Map />
      <CustomBottomSheet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d2d7',
  },

  icon: {
    position: 'absolute',
    top: getScreenPercent(20),
    left: getScreenPercent(10),
    zIndex: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: getScreenPercent(5),
    paddingVertical: getScreenPercent(10),
    borderRadius: getScreenPercent(100),
    backgroundColor: 'white',
    width: getScreenPercent(40),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default HomeScreen;
