import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./styles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Essa é a minha home</Text>
    </SafeAreaView>
  );
}