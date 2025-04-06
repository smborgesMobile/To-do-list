import { TaskStorageService } from '../service/TaskStorageService';
import { Task } from '../../../components/taskInput';

export class TaskViewModel {
    private setTasks: React.Dispatch<React.SetStateAction<Task[]>>;

    constructor(setTasks: React.Dispatch<React.SetStateAction<Task[]>>) {
        this.setTasks = setTasks;
    }

    loadTasks = async () => {
        const tasks = await TaskStorageService.loadTasks();
        this.setTasks(tasks);
    };

    saveTasks = async (tasks: Task[]) => {
        await TaskStorageService.saveTasks(tasks);
    };

    onAddButtonClick = (task: Task) => {
        this.setTasks((prevTasks) => {
            const updatedTasks = [task, ...prevTasks];
            this.saveTasks(updatedTasks);
            return updatedTasks;
        });
    };

    onRemoveTask = (task: Task) => {
        this.setTasks((prevTasks) => {
            const updatedTasks = prevTasks.filter(t => t.id !== task.id);
            this.saveTasks(updatedTasks);
            return updatedTasks;
        });
    };

    onTaskUpdate = (task: Task, isChecked: boolean) => {
        this.setTasks((prevTasks) => {
            const updatedTasks = prevTasks.map(t =>
                t.id === task.id ? { ...t, completed: isChecked } : t
            );
            this.saveTasks(updatedTasks);
            return updatedTasks;
        });
    };
}

export default TaskViewModel;
