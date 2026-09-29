import { Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { tabsStyles } from '../../styles/tabs.styles';
import { colors } from '../../styles/colors';
function TabButton({
  children,
  onPress,
  onLongPress,
  accessibilityState,
  accessibilityLabel,
}: any) {
  const focused = accessibilityState?.selected;

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityLabel={accessibilityLabel}
      style={[
        tabsStyles.tabButton,
        focused && tabsStyles.activeTab,
      ]}
    >
      {children}
    </Pressable>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.textPrimary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: tabsStyles.tabBar,
        tabBarLabelStyle: tabsStyles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Головна',
          tabBarButton: (props) => <TabButton {...props} />,
        }}
      />

      <Tabs.Screen
        name="play"
        options={{
          title: 'Грати',
          tabBarButton: (props) => <TabButton {...props} />,
        }}
      />

      <Tabs.Screen
        name="track"
        options={{
          title: 'Трек',
          tabBarButton: (props) => <TabButton {...props} />,
        }}
      />

      <Tabs.Screen
        name="clubs"
        options={{
          title: 'Клуби',
          tabBarButton: (props) => <TabButton {...props} />,
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: 'Більше',
          tabBarButton: (props) => <TabButton {...props} />,
        }}
      />
    </Tabs>
  );
}