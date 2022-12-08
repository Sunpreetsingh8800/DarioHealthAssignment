import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'
import { StyleSheet } from 'react-native'

export default function Cross() {
    return <Icon name="close" style={styles.fieldX} />
}

const styles = StyleSheet.create({
    fieldX: {
        color: 'red',
        fontSize: 60
    },
})