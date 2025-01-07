import { Pressable, Text, View } from 'react-native'
import { useEffect, useState} from 'react'
import { Link } from 'expo-router'
import { getCurrentUser } from 'aws-amplify/auth'

const Menu = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  async function currentAuthenticatedUser() {
    try {
      const { username, userId, signInDetails } = await getCurrentUser();
      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`The signInDetails: ${signInDetails}`);
      setLoggedIn(true);
    } catch (err) {
      console.log(err);
      setLoggedIn(false);
    }
  }

  return (
    <View>
      <Text>Menu Page</Text>
      {loggedIn ? (
        <Text>User Logged In</Text>
      ) : (
        <Link href="/menu/register">
        <Text>Create Account Here</Text>
      </Link>
      )}
    </View>
  )
}

export default Menu