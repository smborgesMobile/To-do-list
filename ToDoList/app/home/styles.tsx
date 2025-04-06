import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    logo: {
        width: 110,
        height: 32,
        alignItems: "center"
    },
    logoContainer: {
        flex: 0.20,
        backgroundColor: '#0D0D0D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 0.75,
        backgroundColor: '#1A1A1A',
        justifyContent: 'flex-start',
    },
    labelContainer: {
        width: '100%',
        flexDirection: 'row'
    },
    rightLabel: {
        alignItems: 'flex-end',
        paddingEnd: 24,
        
    },
    leftLabel: {
        flex: 1,
        alignItems: 'flex-start',
        paddingStart: 24,
    }
})