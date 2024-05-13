import { StyleSheet, Image, View } from "react-native";

import styles from "../styles";

const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

export default ImageViewer;
