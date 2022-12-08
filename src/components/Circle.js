import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'
import { StyleSheet } from 'react-native'

export default function Circle() {
    return <Icon name="circle-outline" style={styles.fieldO} />
}

const styles = StyleSheet.create({
    fieldO: {
        color: 'green',
        fontSize: 60
    }
})