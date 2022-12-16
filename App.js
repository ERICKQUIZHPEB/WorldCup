import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View , Pressable} from 'react-native';
import React from 'react';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import ImageList from './components/ImageList'

const PlaceholderImage = require("./assets/WorldCup.png");

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      quality:1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      console.log(result);
    }else{
      alert('You did not select any image.');
    }
  }

  return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer 
            placeholderImageSource={PlaceholderImage} 
            selectedImage={selectedImage}
          />
        </View>
        <View style={styles.footerContainer}>
          <Button theme="primary" label="ARGENTINA" onPress={ImageList}/>
          <Button label= "FRANCEA"/>
          <Button label="CROACIA"/>
        </View>    
      <StatusBar style="auto"/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    flex:1,
    paddingTop:58,
  },
  footerContainer:{
    flex:1.333333 ,
    alignItems:'center',
  },
});