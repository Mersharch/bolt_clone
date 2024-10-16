import {StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {GOOGLE_MAPS_APIKEY} from '../utils/constants.ts';

const Map = () => {
  const mapRef = useRef<any>();
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={StyleSheet.absoluteFillObject}
        showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={{
          longitude: 5.5583,
          latitude: -0.2649,
          latitudeDelta: 0.012,
          longitudeDelta: 0.012,
        }}
      />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {flex: 1},
});
