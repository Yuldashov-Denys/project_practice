import { StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

export const tabsStyles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 6,
    borderRadius: 18,
  },

  activeTab: {
    backgroundColor: colors.activeTab,
  },

  tabBar: {
    backgroundColor: colors.background,
    borderTopWidth: 0,
    height: 92,
    paddingTop: 8,
    paddingBottom: 10,
  },

  tabBarLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
});