import { Image, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./styles";
import TaskInput from "../../components/taskInput";
import { StatusLabel } from '@/components/statusLabel';
import { EmptyState } from '@/components/divider';
import { TaskItem } from "../../components/taskItem";

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
        <View style={styles.labelContainer}>
          <View style={styles.leftLabel}>
            <StatusLabel title="Criadas" color='#4EA8DE' counter={10} />
          </View>
          <View style={styles.rightLabel}>
            <StatusLabel title="Concluídas" color='#8284FA' counter={5} />
          </View>
        </View>

        <EmptyState />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </View>
    </SafeAreaView>
  );
}