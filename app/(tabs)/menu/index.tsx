import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Menu = () => {
  return (
    <View>
      <Text>Menu Page</Text>
      <Link href="/menu/login">
        <Text>Login Here</Text>
      </Link>
      <Link href="/menu/register">
        <Text>Create Account Here</Text>
      </Link>
    </View>
  )
}

export default Menu