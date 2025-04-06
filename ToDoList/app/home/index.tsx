import { StatusLabel } from '@/components/statusLabel';
import { useState, useEffect } from 'react';
import { FlatList, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EmptyState } from '../../components/divider';
import TaskInput, { Task } from "../../components/taskInput";
import { TaskItem } from "../../components/taskItem";
import { styles } from "./styles";
import { TaskViewModel } from './viewModels/TaskViewModel';

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const taskViewModel = new TaskViewModel(setTasks);

  useEffect(() => {
    taskViewModel.loadTasks();
  }, [taskViewModel]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.contentContainer}>
        <TaskInput onAddButtonClick={(task: Task) => taskViewModel.onAddButtonClick(task)} />
        <View style={styles.labelContainer}>
          <View style={styles.leftLabel}>
            <StatusLabel title="Criadas" color='#4EA8DE' counter={tasks.filter((task) => !task.completed).length} />
          </View>
          <View style={styles.rightLabel}>
            <StatusLabel title="Concluídas" color='#8284FA' counter={tasks.filter((task) => task.completed).length} />
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onRemove={(task) => taskViewModel.onRemoveTask(task)}
              onUpdate={(task: Task, isChecked: boolean) => taskViewModel.onTaskUpdate(task, isChecked)}
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
