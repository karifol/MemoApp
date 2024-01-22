import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { router } from 'expo-router'

const handlePress = (): void => {
  // ログアウト処理
  router.push('/auth/log_in')
}

const LogOutButton = (): JSX.Element => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>ログアウト</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 'bold'
  }
})

export default LogOutButton
