import { Text, View } from 'react-native';
import { screenStyles } from '../../styles/screen.styles';

export default function PlayScreen() {
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.text}>Грати</Text>
    </View>
  );
}