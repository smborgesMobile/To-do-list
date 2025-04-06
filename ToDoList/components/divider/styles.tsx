import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    divider: {
        height: 1,
        backgroundColor: '#333333',
        marginTop: 20,
        marginHorizontal: 24,
    },
    emptyImage: { 
        width: 56,
        height: 56,
        marginTop: 48,      
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 24
    },
    emptyStateText: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 16,
        marginHorizontal: 44
    },
    emptyStateBoldText: {
        fontWeight: 'bold'
    }
})