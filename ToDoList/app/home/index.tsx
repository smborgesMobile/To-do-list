import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./styles";
import TaskInput from "../../components/taskInput";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.contentContainer}>
        <TaskInput />
      </View>
    </SafeAreaView>
  );
}