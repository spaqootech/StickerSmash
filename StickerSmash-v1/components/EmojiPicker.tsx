import { View, Text, Pressable, Modal } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const EmojiPicker = ({isVisible , children , onClose}) => {
  return (
    <Modal visible={isVisible}>
    <View>
    <View>
      <Text>Choose a sticker</Text>
      <Pressable onPress={onClose}>
        <MaterialIcons name='close' color='white' size={22} />
      </Pressable>
    </View>
    {children}
    </View>
    </Modal>
  )
}

export default EmojiPicker