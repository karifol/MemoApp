import { View, StyleSheet } from 'react-native'
import { useEffect } from 'react'
import MemoLlstItem from '../../components/MemoLlstItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import LogOutButton from '../../components/LogOutButton'
import { router, useNavigation } from 'expo-router'

const handlePress = (): void => {
  // メモ作成画面に遷移
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <LogOutButton />
        )
      }
    })
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <MemoLlstItem />
        <MemoLlstItem />
        <MemoLlstItem />
      </View>
      <CircleButton onPress={handlePress}>
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
