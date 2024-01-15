import { View, Text, StyleSheet, type TextStyle } from 'react-native'

interface Props {
  children: string
  name: string
  bang?: boolean
  style?: TextStyle
}

const Hello = (props: Props): JSX.Element => {
  const { name, bang, style } = props
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>
        Hello {name}
        {bang === true ? '!' : ''}
      </Text>
    </View>
  )
}

export default Hello

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  text: {
    fontSize: 40,
    color: '#fff'
  }
})
