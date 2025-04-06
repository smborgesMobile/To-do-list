import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";
import { Task } from "../taskInput";

interface TaskItemProps {
    task: Task,
    onRemove: (task: Task) => void
}

export function TaskItem(props: TaskItemProps) {
    const [isChecked, setIsChecked] = useState(false);
    const { task, onRemove } = props;

    return (
        <View style={styles.container}>
            <BouncyCheckbox
                size={20}
                fillColor={isChecked ? "#5E60CE" : "#4EA8DE"}
                iconStyle={{ borderColor: "blue" }}
                innerIconStyle={{ borderWidth: 3 }}
                onPress={(checked: boolean) => {
                    setIsChecked(checked);
                    console.log(checked);
                }}
            />
            <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={styles.taskTitle}>
                {task.name}
            </Text>
            <TouchableOpacity onPress={() => onRemove(task)}>
                <Image
                    style={styles.taskImage}
                    source={require('../../assets/images/trash.png')}
                />
            </TouchableOpacity>
        </View>
    );
}
