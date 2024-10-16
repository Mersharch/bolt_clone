import {Pressable, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {getScreenPercent} from '../utils/responsive.ts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';

const Map = () => {
  const mapRef = useRef<any>();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.icon}>
        <Ionicons name="menu" size={24} />
      </Pressable>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={StyleSheet.absoluteFillObject}
        showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={{
          longitude: 5.3329,
          latitude: -0.1553,
          latitudeDelta: 0.012,
          longitudeDelta: 0.012,
        }}
      />
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {flex: 1},
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
