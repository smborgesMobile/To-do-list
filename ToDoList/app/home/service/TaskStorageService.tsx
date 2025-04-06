import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../../../components/taskInput';

export class TaskStorageService {
    private static TASKS_KEY = 'tasks';

    static async loadTasks(): Promise<Task[]> {
        try {
            const savedTasks = await AsyncStorage.getItem(this.TASKS_KEY);
            return savedTasks ? JSON.parse(savedTasks) : [];
        } catch (error) {
            console.error("Erro ao carregar tarefas do armazenamento local", error);
            return [];
        }
    }

    static async saveTasks(tasks: Task[]): Promise<void> {
        try {
            await AsyncStorage.setItem(this.TASKS_KEY, JSON.stringify(tasks));
        } catch (error) {
            console.error("Erro ao salvar tarefas no armazenamento local", error);
        }
    }
}

export default TaskStorageService;
