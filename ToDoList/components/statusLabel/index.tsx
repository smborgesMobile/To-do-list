import { styles } from "./styles";
import { View, Text, TextStyle } from "react-native";

interface StatusLabelProps {
    title: string;
    color: string;
    counter: number;
}

export function StatusLabel({ title, color, counter }: StatusLabelProps) {
    return (
        <View style={styles.labelContainer}>
            <Text style={[styles.labelText, { color: color }]}>{title}</Text>
            <View style={styles.labelNumberContainer}>
                <Text
                    style={styles.labelNumber}>{counter}
                </Text>
            </View>
        </View>
    );
}
