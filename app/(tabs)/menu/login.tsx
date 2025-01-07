import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Login() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    const parent = navigation.getParent();
    // Hide tab bar when focused
    parent?.setOptions({
      tabBarStyle: { display: 'none' }
    });

    // Show tab bar when unfocused
    return () => {
      parent?.setOptions({
        tabBarStyle: { display: 'flex' }
      });
    };
  }, [navigation]);

  return (
    <KeyboardAwareScrollView className='bg-darkColor w-full h-full flex flex-col'>
      <SafeAreaView className='flex flex-col h-full w-full justify-between items-center py-16 px-8 '>
       {/* form wrapper */}
       <View className='flex h-full w-full gap-y-8 items-start justify-center'>
        {/* back button */}
        <TouchableOpacity onPress={() => navigation.goBack()} className='flex w-full'>
          <Ionicons name='arrow-back-circle' size={32} color='white' />
        </TouchableOpacity>

        {/* login text */}
        <View className='flex flex-row'>
          <Text className='text-4xl font-light text-white'>Login to <Text className='text-primaryColorLight font-semibold'>Pamphere</Text></Text>
        </View>

        {/* email and password form */}
        <View className='flex flex-col gap-y-4 w-full'>
          <Text className='text-white'>Email</Text>
          <View className='w-full h-12 rounded-lg px-4 border border-gray-400 flex flex-row items-center'>
            <TextInput 
              className='flex-1 text-white'
              placeholder='example@email.com'
              placeholderTextColor='gray'
            />
          </View>
          <Text className='text-white'>Password</Text>
          <View className='w-full h-12 rounded-lg px-4 border border-gray-400 flex flex-row items-center'>
            <TextInput 
              className='flex-1 text-white'
              placeholder='Your Password'
              placeholderTextColor='gray'
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Ionicons 
                name={passwordVisible ? 'eye-off' : 'eye'} 
                size={24} 
                color='gray' 
              />
            </TouchableOpacity>
          </View>
        </View>
      <Pressable onPress={() => console.log('Forgot Password?')}>
        <Text className='text-primaryColorLight underline'>Forgot Password?</Text>
      </Pressable>

      {/* login button */}
      <TouchableOpacity 
        onPress={() => console.log('Login')} 
        className='w-full h-12 bg-primaryColor rounded-lg flex justify-center items-center'
        >
        <Text className='text-white'>Login</Text>
      </TouchableOpacity>

      {/* or section */}
      <View className='flex flex-row items-center w-full my-4'>
          <View className='flex-1 h-px bg-gray-400'></View>
          <Text className='mx-4 text-gray-400'>OR</Text>
          <View className='flex-1 h-px bg-gray-400'></View>
      </View>

      <View className='flex w-full'>
      <TouchableOpacity 
        onPress={() => console.log('Continue with Google')} 
        className='flex flex-row left-0 gap-x-4 h-12 rounded-lg justify-center items-center border border-gray-400'
        >
        <AntDesign name="google" size={16} color="white" />
        <Text className='text-white'>Continue With Google</Text>
      </TouchableOpacity>
      </View>

      </View>

      {/* long text wrapper*/}
      <View className='flex h-fit w-full items-center justify-center '>
        <Text className='text-center text-gray-400'>
          Lorem ipsum words nga taas kaayo as if lang naa ni diri para makita unsa siya tan-awon if taas ang text diri na element daghang salamat.{' '}
        </Text>
          <Pressable>
            <Text className='underline text-gray-400'>Learn More</Text>
          </Pressable>
      </View>
    </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}