// React & React Native Imports
import { View, StatusBar, SafeAreaView } from "react-native";
import React, { useState } from "react";

//External Library Imports
import * as ImagePicker from "expo-image-picker";

//Project Files
import Button from "../components/Button";
import styles from "../styles";

const UploadPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Passing an ImagePickerOptions objecy to launchImageLibrary
  // the above method displays the system UI for choosing image or video.
  // the method also returns an object containing info about a selected image.
  // Image tags can use the uri of an image to display it. In the returned object,
  // the uri is stored in an array accessed by the key 'assests.'
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image");
    }
  };

  <SafeAreaView style={styles.container}>
    <View style={styles.footerContainer}>
      <Button label="Choose a photo" onPress={pickImageAsync} />
    </View>
    <StatusBar style="auto" />
  </SafeAreaView>;
};

export default UploadPhoto;
