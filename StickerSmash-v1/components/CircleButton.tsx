import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import className from 'twrnc'

const CircleButton = ({onPress}) => {
  return (
    <View>
      <Pressable onPress={onPress} style={className`bg-white p-2 rounded-full border border-2 border-gray-500`}>
        <MaterialIcons name='add' size={38} color='black'/>
      </Pressable>
    </View>
  )
}

export default CircleButton