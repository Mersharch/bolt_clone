import {StyleSheet} from 'react-native';
import {getScreenPercent} from '../utils/responsive';

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: getScreenPercent(16),
    color: '#333',
    fontWeight: '600',
  },
  subTitle: {
    fontSize: getScreenPercent(14),
    fontWeight: '600',
  },
  tinyText: {
    fontSize: getScreenPercent(12),
  },
});
