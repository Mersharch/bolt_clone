/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {getScreenPercent} from '../utils/responsive';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {globalStyles} from '../globals/styles';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LocationInput from './LocationInput';

const CustomBottomSheet = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(
    () => ['25%', '40%', '50%', '75%', '90%', '115%'],
    [],
  );

  const navOptions = [
    {
      title: 'Bolt Food',
      subtitle: 'Fast Selivery',
      icon: 'fast-food',
    },
    {
      title: 'Bolt Send',
      subtitle: 'Parcel Delivery',
      icon: 'send',
    },
  ];

  const recentTrips = [
    {
      destination: 'New York',
      location: 'Business Trip',
      type: 'work',
    },
    {
      destination: 'Los Angeles',
      location: 'Vacation',
      type: 'home',
    },
    {
      destination: 'Chicago',
      location: 'Conference',
      type: 'bus',
    },
    {
      destination: 'Miami',
      location: 'Family Visit',
    },
    {
      destination: 'San Francisco',
      location: 'Tech Meetup',
    },
  ];

  const handleSheetChange = useCallback((index: number) => {
    if (index === 5) {
      setIsFullScreen(true);
      return;
    }
    if (index > 5) {
      setIsFullScreen(false);
      bottomSheetRef.current?.collapse();
    }
    setIsFullScreen(false);
    return console.log('handleSheetChange', index);
  }, []);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={1}
      onChange={handleSheetChange}
      handleIndicatorStyle={styles.bottomSheetIndicator}>
      <BottomSheetScrollView contentContainerStyle={styles.scrollViewContent}>
        {isFullScreen ? (
          <>
            <View style={styles.headerContainer}>
              <Pressable
                onPress={() => bottomSheetRef.current?.collapse()}
                style={[
                  styles.icons,
                  {backgroundColor: 'transparent', borderRadius: 0},
                ]}>
                <Icon name="close" size={24} color="#333" />
              </Pressable>
              <Pressable
                style={[
                  styles.icons,
                  {backgroundColor: 'transparent', borderRadius: 0},
                ]}>
                <Icon name="add" size={24} color="#333" />
              </Pressable>
            </View>
            <LocationInput />
            <View>
              {recentTrips.map((trip, index) => (
                <View
                  key={index}
                  style={[
                    styles.navOption,
                    {
                      marginTop: getScreenPercent(15),
                      backgroundColor: 'transparent',
                    },
                  ]}>
                  <Icon
                    name={
                      !trip.type
                        ? 'time-outline'
                        : trip.type === 'work'
                        ? 'briefcase-outline'
                        : trip.type === 'home'
                        ? 'home-outline'
                        : 'bus-outline'
                    }
                    size={24}
                    style={styles.icons}
                  />
                  <View>
                    <Text style={globalStyles.subTitle}>
                      {trip.destination}
                    </Text>
                    <Text style={globalStyles.tinyText}>{trip.location}</Text>
                  </View>
                </View>
              ))}
            </View>
          </>
        ) : (
          <>
            <Pressable
              style={styles.searchBar}
              onPress={() => bottomSheetRef.current?.expand()}>
              <View style={styles.searchInputContainer}>
                <Icon
                  name="search"
                  size={24}
                  color="#333"
                  style={[
                    styles.icons,
                    {
                      backgroundColor: '#d1d2d7',
                      borderRadius: getScreenPercent(50),
                      padding: getScreenPercent(5),
                    },
                  ]}
                />
                <Text style={styles.searchInputText}>Where to?</Text>
              </View>
              <Pressable style={styles.scheduleButton}>
                <MaterialCommunityIcons
                  name="calendar-clock"
                  size={20}
                  color="green"
                />
                <Text style={styles.scheduleButtonText}>Schedule</Text>
              </Pressable>
            </Pressable>

            {/* Add more content here */}
            <View style={styles.navContainer}>
              {navOptions.map((option, index) => (
                <View key={index} style={styles.navOption}>
                  <Icon name={option.icon} size={24} color="green" />
                  <View>
                    <Text style={globalStyles.title}>{option.title}</Text>
                    <Text style={globalStyles.tinyText}>{option.subtitle}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View>
              {recentTrips.map((trip, index) => (
                <View
                  key={index}
                  style={[
                    styles.navOption,
                    {
                      marginTop: getScreenPercent(15),
                      backgroundColor: 'transparent',
                    },
                  ]}>
                  <Icon
                    name={
                      !trip.type
                        ? 'time-outline'
                        : trip.type === 'work'
                        ? 'briefcase-outline'
                        : trip.type === 'home'
                        ? 'home-outline'
                        : 'bus-outline'
                    }
                    size={24}
                    style={styles.icons}
                  />
                  <View>
                    <Text style={globalStyles.subTitle}>
                      {trip.destination}
                    </Text>
                    <Text style={globalStyles.tinyText}>{trip.location}</Text>
                  </View>
                </View>
              ))}
            </View>
          </>
        )}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomSheetIndicator: {
    backgroundColor: '#f0f0f0',
    width: 40,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: getScreenPercent(5),
    paddingHorizontal: getScreenPercent(15),
    backgroundColor: '#fbfcfc',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: getScreenPercent(10),
    borderRadius: getScreenPercent(5),
    backgroundColor: '#f0f0f0',
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: getScreenPercent(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchInputText: {
    ...globalStyles.title,
    marginLeft: getScreenPercent(10),
  },
  scheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fbfcfc',
    paddingVertical: getScreenPercent(6),
    paddingHorizontal: getScreenPercent(12),
    borderRadius: 20,
  },
  scheduleButtonText: {
    marginLeft: getScreenPercent(5),
    ...globalStyles.tinyText,
    fontWeight: '500',
    color: '#333',
  },
  navContainer: {
    marginTop: getScreenPercent(10),
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    gap: 10,
  },

  navOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: getScreenPercent(6),
    paddingHorizontal: getScreenPercent(12),
    borderRadius: 8,
    gap: 20,
    flex: 1,
  },
  placeholderText: {
    fontSize: getScreenPercent(18),
    fontWeight: '600',
    color: '#333',
    marginBottom: getScreenPercent(10),
  },
});
