import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#262626',
        padding: 12,
        marginTop: 8,
        marginRight: 24,
        marginLeft: 24,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#333333',
    },
    taskTitle: {
        marginLeft: 10,
        marginRight: 8,
        fontSize: 14,
        color: '#F2F2F2',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
    },
    checkbox: {
        alignSelf: 'center',
    },
    taskImage: {
        width: 40,
        height: 40,
        alignSelf: 'center',
    }
})