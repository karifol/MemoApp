import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native'
import { deleteUser, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth'
import { router } from 'expo-router'
import { auth } from '../config'

const handlePress = (): void => {
  Alert.prompt(
    'アカウント削除の手続き',
    'メールアドレスを入力してください',
    [
      { text: 'Cancel', onPress: () => { Alert.alert('キャンセルしました') }, style: 'cancel' },
      {
        text: 'OK',
        onPress: (email) => {
          Alert.prompt(
            'アカウント削除の手続き',
            'パスワードを入力してください',
            [
              { text: 'Cancel', onPress: () => { Alert.alert('キャンセルしました') }, style: 'cancel' },
              {
                text: 'OK',
                onPress: (password) => {
                  if (email == null || password == null) {
                    Alert.alert('メールアドレスまたはパスワードが正しくありません')
                    return
                  }
                  const credential = EmailAuthProvider.credential(email, password)
                  if (auth.currentUser === null) { return }
                  reauthenticateWithCredential(auth.currentUser, credential)
                    .then(() => {
                      // ユーザーが再認証されました。アカウントを削除できます。
                      if (auth.currentUser === null) { return }
                      deleteUser(auth.currentUser)
                        .then(() => {
                          router.replace('/auth/log_in')
                        })
                        .catch(() => {
                          Alert.alert('アカウントの削除に失敗しました')
                        })
                    })
                    .catch(() => {
                      Alert.alert('メールアドレスまたはパスワードが正しくありません')
                    })
                }
              }
            ]
          )
        }
      }
    ]
  )
}

const DeleteAccount = (): JSX.Element => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style = {styles.text}>アカウント削除</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: 'bold',
    color: 'rgba(255, 164, 164, 0.8)'
  }
})

export default DeleteAccount
