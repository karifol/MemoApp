import {
  View, Text, TextInput,
  StyleSheet, TouchableOpacity, Alert
} from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth'

import { auth } from '../../config'
import Button from '../../components/Button'
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency'

const handlePress = async (email: string, password: string): void => {
  const { granted } = await requestTrackingPermissionsAsync()
  console.log(granted)
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user.uid)
      router.replace('/memo/list')
    })
    .catch(() => {
      Alert.alert('メールアドレスまたはパスワードが正しくありません。')
    })
}

const handlePressAnonymous = (): void => {
  signInAnonymously(auth)
    .then((userCredential) => {
      router.replace('/memo/list')
    })
    .catch((error) => {
      const { code, message } = error
      console.log(code, message)
      Alert.alert(String(message))
    })
}

const LogIn = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style = {styles.container}>
      <View style = {styles.inner}>
        <Text style = {styles.title}>ログイン</Text>
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
        <Button label='ログイン' onPress={() => { handlePress(email, password) }}/>
        <View style = {styles.footer}>
          <Text style = {styles.footerText}>サインアップは</Text>
          <Link href='auth/sign_up' asChild replace>
            <TouchableOpacity>
              <Text style = {styles.footerLink}>こちら</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View>
          <TouchableOpacity onPress={handlePressAnonymous}>
            <Text style = {styles.footerLink}>ログインせずに続ける</Text>
          </TouchableOpacity>
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
    color: '#467FD3'
  }
})

export default LogIn
