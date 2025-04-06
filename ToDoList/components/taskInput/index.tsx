import { styles } from "./styles";
import { TextInput, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

export interface Task {
    id: number;
    name: string;
    completed: boolean;
}

interface ParticipantProps {
    onAddButtonClick: (name: Task) => void;
}

export default function TaskInput(props: ParticipantProps) {
    const { onAddButtonClick } = props;
    const [taskName, setTaskName] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.taskInput}
                placeholder="Adicione uma nova tarefa."
                placeholderTextColor="#6b6b6b"
                onChangeText={(text) => setTaskName(text)}
                value={taskName}
                numberOfLines={1}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (taskName.trim()) {
                        const task: Task = {
                            id: Math.random(),
                            name: taskName,
                            completed: false,
                        };
                        onAddButtonClick(task);
                        setTaskName("");
                        console.log(task);
                    }
                }}
            >
                <Image
                    source={require('../../assets/images/plus.png')}
                    style={styles.buttonImage}
                />
            </TouchableOpacity>
        </View>
    );
}