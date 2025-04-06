import { styles } from "./styles";
import { View, Image, Text } from "react-native";

export function EmptyState() {
    return (
        <>
            <View style={styles.divider} />
            <Image style={styles.emptyImage} source={require('../../assets/images/clipboard.png')} />
            <Text style={styles.emptyStateText}>
                <Text style={styles.emptyStateBoldText}>Você ainda não tem tarefas cadastradas</Text>
                {"\n"}
                Crie tarefas e organize seus itens a fazer
            </Text>
        </>
    );
}