import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'

const ImageViewer = ({placeHolderImageSource ,selectedImage}) => {
  const imageSource = selectedImage ? {uri:selectedImage}:placeHolderImageSource;
  return (
    <View>
      <Image source={imageSource} style={className`h-120 w-80`}/>
    </View>
  )
}

export default ImageViewer