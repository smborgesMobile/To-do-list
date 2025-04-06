// Removed unused EmptyState import
import { StatusLabel } from '@/components/statusLabel';
import { useState } from 'react';
import { Image, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskInput, { Task } from "../../components/taskInput";
import { TaskItem } from "../../components/taskItem";
import { styles } from "./styles";
import { EmptyState } from '../../components/divider';

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function onAddButtonClick(task: Task) {
    setTasks([...tasks, task]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.contentContainer}>
        <TaskInput onAddButtonClick={(task: Task) => onAddButtonClick(task)} />
        <View style={styles.labelContainer}>
          <View style={styles.leftLabel}>
            <StatusLabel title="Criadas" color='#4EA8DE' counter={10} />
          </View>
          <View style={styles.rightLabel}>
            <StatusLabel title="Concluídas" color='#8284FA' counter={5} />
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <EmptyState />
          )}
        />
      </View>
    </SafeAreaView>
  );
}