import { Text, View } from 'react-native';
import { screenStyles } from '../../styles/screen.styles';

export default function TrackScreen() {
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.text}>Трек</Text>
    </View>
  );
}