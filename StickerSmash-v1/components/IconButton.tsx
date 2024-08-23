import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import className from 'twrnc'

const IconButton = ({icon , label,onPress}) => {
  return (
    <View>
      <Pressable onPress={icon , label , onPress} >
        <MaterialIcons name={icon} size={38} color='white'/>
        <Text style={className`text-white`}>{label}</Text>
      </Pressable>
    </View>
  )
}

export default IconButton