import { StyleSheet,Image} from 'react-native';

export default function ImageViewer({placeholderImageSource, selectedImage}) {
  const imageSource = selectedImage !== null
  ? { uri: selectedImage }
  : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;

}

const styles = StyleSheet.create ({
  image: {
   widht: 320,
   height: 440,
   borderRadius: 18,

  }

});