import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: '600',
  },
});