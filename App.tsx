import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>こんにちわ</Text>
      <Text>おはよう</Text>
      <Text>びろーん</Text>
      <StatusBar style="auto" />
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  }
})
