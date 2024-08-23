import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import className from 'twrnc'
import ImageViewer from './components/ImageViewer'
import Button from './components/Button';
const placehoderImage = require('../StickerSmash/assets/images/background-image.png');
import * as ImagePicker from 'expo-image-picker'
import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';

const App = () => {
  const [showAppOptions ,setShowAppOptions] = useState(false)
  const [selectedImage , setSelectedImage] = useState(null)

const pickImageAsync = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      quality:1,
    })
    if(!result.canceled){
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true);
    }else {
      alert("You don't picked an Image")
    }
  }

  const onRest = () => {
    setShowAppOptions(false)
  }
  const onAddSticker=()=>{}
  const onSaveImageAsync=()=>{}
  return (
    <View style={className`bg-gray-900 flex-col justify-center items-center flex-1 gap-2`}>
        <ImageViewer placeHolderImageSource={placehoderImage} selectedImage={selectedImage}/>
        <View>
          {showAppOptions ? (
            <View style={className`flex-row justify-between items-center w-70 py-5`}>
              <IconButton icon='refresh' label='Reset' onPress={onRest}/>
              <CircleButton onPress={onAddSticker}/>
              <IconButton icon='save-alt' label='Save' onPress={onSaveImageAsync}/>
            </View>
          ):(
            <View style={className`gap-2`}>
        <Button label='Choose a photo' theme='primary' onPress={pickImageAsync}/>
        <Button label='Use thiss photo' onPress={()=>setShowAppOptions(true)}/>
        </View>
          )}
        </View>
    </View>
  )
}

export default App