import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'


export default function ResetButton({ onClickRestart }) {
    return (
        <TouchableOpacity style={styles.restartButton} onPress={onClickRestart}>
            <Text style={styles.instructions}>
                Restart game
                </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    restartButton: {
        backgroundColor: 'yellow',
        borderColor: "#000",
        borderWidth: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 100,
        paddingVertical: 15
    },
    instructions: {
        color: '#000',
        textAlign: 'center'
    },
})