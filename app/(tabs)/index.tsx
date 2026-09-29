import { Text, View } from 'react-native';
import { screenStyles } from '../../styles/screen.styles';

export default function HomeScreen() {
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.text}>Головна</Text>
    </View>
  );
}