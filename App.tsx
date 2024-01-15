import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Hello from './src/components/Hello'

const App = (): JSX.Element => {
  const style = {
    color: '#fff',
    backgroundColor: '#d13f3f'
  }
  return (
    <View style={styles.container}>
      <Text>こんにちわ</Text>
      <StatusBar style="auto" />
      <Hello name='Shunsuke' style={style}>WORLD</Hello>
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
    color: '#fff',
    height: 50
  }
})
