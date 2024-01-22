import { View, Text, ScrollView, StyleSheet } from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router } from 'expo-router'

const handlePress = (): void => {
  // メモ編集画面に遷移
  router.push('/memo/edit')
}

const detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2023年12月22日  10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト
          ｆだｌｄｆじゃｌｄｆじゃｌｊｆだｌｆｊ
          ｌｆだｊｌｓｆｊｌｓｊ
        </Text>
      </ScrollView>
      <CircleButton onPress={handlePress} style={{ top: 60, bottom: 'auto' }} >
        <Icon name='pencil' size={40} color='white' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#457FD3',
    justifyContent: 'center',
    padding: 10
  },
  memoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4
  },
  memoDate: {
    fontSize: 12,
    color: '#fff'
  },
  memoBody: {
    padding: 32
  },
  memoBodyText: {
    fontSize: 14,
    lineHeight: 24
  }
})

export default detail
