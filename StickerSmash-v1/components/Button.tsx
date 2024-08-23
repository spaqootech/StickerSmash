import { View, Text, Pressable } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { FontAwesome } from '@expo/vector-icons'
const Button = ({label , theme , onPress}) => {
if(theme === 'primary'){
    return (
        <View>
          <Pressable onPress={onPress} style={className` w-80 p-3 rounded-lg  border-white text-center border flex-row justify-center items-center gap-2`}>
            <FontAwesome name='picture-o' size={18} color='white'/>
          <Text style={className`text-lg text-white`}>{label}</Text>
          </Pressable>
        </View>
      )
}
    return (
    <View>
      <Pressable onPress={onPress}>
      <Text style={className`text-lg w-80 p-3 rounded-lg text-white border-white text-center border`}>{label}</Text>
      </Pressable>
    </View>
  )
}

export default Button