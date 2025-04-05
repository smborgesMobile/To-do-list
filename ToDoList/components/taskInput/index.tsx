import { styles } from "./styles";
import { TextInput, View, TouchableOpacity, Image } from "react-native";

export default function TaskInput() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.taskInput}
                placeholder="Adicione uma nova tarefa."
                placeholderTextColor="#6b6b6b"
                onChangeText={(text) => { }}
            />
            <TouchableOpacity style={styles.button}>
                <Image
                    source={require('../../assets/images/plus.png')}
                    style={styles.buttonImage}
                />
            </TouchableOpacity>
        </View>
    );
}