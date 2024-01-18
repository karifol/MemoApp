import { View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Header from '../../components/Header'
import MemoLlstItem from '../../components/MemoLlstItem'
import CircleButton from '../../components/CircleButton'

const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <MemoLlstItem />
        <MemoLlstItem />
        <MemoLlstItem />
      </View>
      <CircleButton>
        <Feather name='plus' size={40} color='white' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default List
