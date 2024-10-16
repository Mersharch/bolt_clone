import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomBottomSheet from '../components/CustomBottomSheet';
import Map from '../components/Map';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
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
});

export default HomeScreen;
