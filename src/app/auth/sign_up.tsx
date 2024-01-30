import {
  View, Text, TextInput,
  StyleSheet, TouchableOpacity, Alert
} from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config'
import Button from '../../components/Button'

const handlePress = (email: string, password: string): void => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredintial) => {
      router.replace('/memo/list')
    })
    .catch((error) => {
      const { code, message } = error
      console.log(code, message)
      if (code === 'auth/weak-password') {
        Alert.alert('パスワードは6文字以上で入力してください。')
      } else if (code === 'auth/email-already-in-use') {
        Alert.alert('このメールアドレスは既に登録されています。')
      } else if (code === 'auth/invalid-email') {
        Alert.alert('メールアドレスの形式が正しくありません。')
      } else if (code === 'auth/missing-password') {
        Alert.alert('パスワードを入力してください。')
      }
      Alert.alert('登録に失敗しました。')
    })
}

const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style = {styles.container}>
      <View style = {styles.inner}>
        <Text style = {styles.title}>サインアップ</Text>
        <TextInput
          style = {styles.input}
          value = {email}
          onChangeText = {(text) => { setEmail(text) }}
          autoCapitalize = 'none'
          keyboardType = 'email-address'
          placeholder = 'Email address'
          textContentType = 'emailAddress'
        />
        <TextInput
          style = {styles.input}
          value = {password}
          onChangeText = {(text) => { setPassword(text) }}
          autoCapitalize = 'none'
          secureTextEntry
          placeholder = 'Password'
          textContentType = 'password'
        />
        <Button label='登録' onPress={() => { handlePress(email, password) }}/>
        <View style = {styles.footer}>
          <Text style = {styles.footerText}>ログインは</Text>
          <Link href='auth/log_in' asChild replace>
            <TouchableOpacity>
              <Text style = {styles.footerLink}>こちら</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#ffffff',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#000000'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#3A822E'
  }
})

export default SignUp
