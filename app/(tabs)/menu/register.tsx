import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Link, useNavigation } from 'expo-router';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function Register() {
   const navigation = useNavigation();
  
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
    <KeyboardAwareScrollView className='bg-darkColor w-full h-full flex flex-col py-16 px-8'>
      <SafeAreaView className='flex flex-col h-full w-full justify-between items-center'>
       <View className='flex h-full w-full gap-y-8 items-start justify-center'>
        {/* back button */}
        <TouchableOpacity onPress={() => navigation.goBack()} className='flex w-full'>
          <Ionicons name='arrow-back-circle' size={32} color='white' />
        </TouchableOpacity>

        <View className='flex flex-row'>
          <Text className='text-4xl font-light text-white'>Create your account</Text>
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

      {/* or section */}
      <View className='flex flex-row items-center w-full my-4'>
          <View className='flex-1 h-px bg-gray-400'></View>
          <Text className='mx-4 text-gray-400'>OR</Text>
          <View className='flex-1 h-px bg-gray-400'></View>
      </View>
      

        {/* email form */}
        <View className='flex flex-col gap-y-4 w-full'>
          <Text className='text-white'>Email <Text className='text-primaryColorLight font-bold'>*</Text></Text>
          <View className='w-full h-12 rounded-lg px-4 border border-gray-400 flex flex-row items-center'>
            <TextInput 
              className='flex-1 text-white'
              placeholder='example@email.com'
              placeholderTextColor='gray'
            />
          </View>
        </View>

      {/* register button */}
      <TouchableOpacity 
        onPress={() => console.log('Create Account')} 
        className='w-full h-12 bg-primaryColor rounded-lg flex justify-center items-center'
        >
        <Text className='text-white'>Continue with Email</Text>
      </TouchableOpacity>

      <View className='flex w-full items-center gap-x-2'>
        <Text className='text-white'>Already Have an Account?   <Link href='/menu/login' className='text-primaryColorLight underline'>Login</Link></Text>
      </View>

      </View>

    </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}