import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
    },
    logo: {
        width: 110,
        height: 32,
        alignItems: "center"
    },
    logoContainer: {
        height: 160,
        backgroundColor: '#0D0D0D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        justifyContent: 'flex-start',
        paddingBottom: 16
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