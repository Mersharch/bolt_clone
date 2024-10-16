/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getScreenPercent} from '../utils/responsive';

const LocationInput = () => {
  const originInput = useRef<any>(null);
  const destinationInput = useRef<any>(null);
  const [originFocused, setOriginFocused] = useState<boolean>(false);
  const [destinationFocused, setDestinationFocused] = useState<boolean>(false);

  useEffect(() => {
    destinationInput.current.focus();
  }, []);

  return (
    <View>
      {/* ORIGIN */}
      <View
        style={[
          styles.container,
          {
            backgroundColor: originFocused ? 'transparent' : '#f0f0f0',
            borderWidth: originFocused ? 1 : 0,
            borderColor: originFocused ? 'green' : 'transparent',
          },
        ]}>
        {originFocused ? (
          <FontAwesome name="search" size={24} />
        ) : (
          <FontAwesome name="dot-circle-o" size={24} color="blue" />
        )}

        <TextInput
          style={styles.input}
          placeholder="Pick up Point"
          placeholderTextColor={'#747579'}
          onChangeText={() => {}}
          ref={originInput}
          multiline={false}
          onFocus={() => setOriginFocused(originInput.current?.isFocused())}
          onBlur={() => setOriginFocused(originInput.current?.isFocused())}
        />
        {originFocused && (
          <FontAwesome name="map-marker" size={24} color="green" />
        )}
      </View>

      {/* DESTINATION */}
      <View
        style={[
          styles.container,
          {
            backgroundColor: destinationFocused ? 'transparent' : '#f0f0f0',
            borderWidth: destinationFocused ? 1 : 0,
            borderColor: destinationFocused ? 'green' : 'transparent',
          },
        ]}>
        {destinationFocused ? (
          <FontAwesome name="search" size={24} />
        ) : (
          <FontAwesome name="circle-o" size={24} />
        )}

        <TextInput
          style={styles.input}
          placeholder="Destination"
          placeholderTextColor={'#747579'}
          onChangeText={() => {}}
          ref={destinationInput}
          multiline={false}
          onFocus={() =>
            setDestinationFocused(destinationInput.current?.isFocused())
          }
          onBlur={() =>
            setDestinationFocused(destinationInput.current?.isFocused())
          }
        />
        {destinationFocused && (
          <FontAwesome name="map-marker" size={24} color="blue" />
        )}
      </View>
    </View>
  );
};

export default LocationInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    borderRadius: getScreenPercent(5),
    alignItems: 'center',
    paddingHorizontal: getScreenPercent(10),
    paddingVertical: getScreenPercent(5),
  },

  input: {
    flex: 1,
    paddingVertical: getScreenPercent(5),
    paddingLeft: getScreenPercent(5),
    fontSize: getScreenPercent(16),
    backgroundColor: 'transparent',
  },
});
