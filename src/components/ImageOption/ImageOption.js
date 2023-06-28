import React from "react";
import { View, Image, Text } from "react-native";
import styles from "../../../App.styles";

const ImageOption = (props) => {
  // console.log(props);
  const { image, text } = props;

    return (
      <View style={styles.optionContainer}>
        <Image
          source={{ uri: image}}
          style={styles.optionImage}
          resizeMode='contain'
          />
          <Text style={styles.optionText}>{text}</Text>
      </View>
    )
}
export default ImageOption
