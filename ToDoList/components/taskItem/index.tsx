import { View, Text, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";

export function TaskItem() {
    return (
        <View style={styles.container}>
            <BouncyCheckbox
                size={20}
                fillColor="#4EA8DE"
                iconStyle={{ borderColor: "blue" }}
                innerIconStyle={{ borderWidth: 3 }}
                onPress={(isChecked: boolean) => { console.log(isChecked) }}
            />
            <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={styles.taskTitle}>
                Integer urna interdum massa libero auctor neque turpis turpis semper.
                Integer urna interdum massa libero auctor neque turpis turpis semper.
            </Text>
            <Image
                style={styles.taskImage}
                source={require('../../assets/images/trash.png')}
            />
        </View>
    );
}