import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import MemoLlstItem from '../../components/MemoLlstItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

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
        <Icon
          name='plus'
          size={40}
          color='white'
        />
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
