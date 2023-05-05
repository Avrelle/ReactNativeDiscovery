/*import React from "react";
import { StyleSheet} from 'react-native';
import About from "./pages/About";
import Home from "./pages/home";
import { Routes,NativeRouter, Route } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});*/
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated from 'react-native-reanimated';


//import User from './components/User';

const PlaceholderImage = require('./assets/images/Gull_portrait_ca_usa.jpg');


export default function App() {
  /*const [age, setAge] = useState(18);
  const handleChangeAge=()=>{
    setAge(21);
  }
  const [user, setUser] = useState(null)
  const Login=()=>{
    //ouverture caméra
    // Prendre photo du qr code
    // Récupe de l'uuid
    // Fetch de l'api d'authentification avec l'uuid
    // SI l'uuid existe const data récupérera les données
    const data = {
      name: "Anton",
      LastName: "Delahaye",
      isAdmin: true
    }
    setUser(data);
  }*/
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };


  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };
  
  return (
  <GestureHandlerRootView style={styles.container}>  
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
        />
         {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
          <IconButton icon="refresh" label="Reset" onPress={onReset}/>
          <CircleButton onPress={onAddSticker}/>
          <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
        </View>
      </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
       <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </View>

    </GestureHandlerRootView>
  );
}
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },

});


