import { Text, View } from 'react-native';
import { screenStyles } from '../../styles/screen.styles';

export default function MoreScreen() {
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.text}>Більше</Text>
    </View>
  );
}