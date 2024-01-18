import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
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
      <CircleButton style={{ top: 160, bottom: 'auto' }} >
        <Feather name='plus' size={40} color='white' />
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
