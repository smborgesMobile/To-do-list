import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        paddingStart: 16,
        paddingEnd: 24,
        transform: [{translateY: -30}]
    },
    taskInput: {
        flex: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        backgroundColor: '#262626',
        color: '#FFFFFF',
        padding: 16,
        fontSize: 16,
        borderColor: '#5E60CE',
        borderWidth: 1
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        lineHeight: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonImage: {
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
})