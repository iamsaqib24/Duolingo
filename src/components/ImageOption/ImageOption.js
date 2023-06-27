import React from "react";
import { View, Image, Text } from "react-native";
import styles from "../../../App.styles";

const ImageOption = () => {
    return (
      <View style={styles.optionContainer}>
        <Image
          source={{ uri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png'}}
          style={styles.optionImage}
          resizeMode='contain'
          />
          <Text style={styles.optionText}>Cup</Text>
      </View>
    )
}
export default ImageOption
