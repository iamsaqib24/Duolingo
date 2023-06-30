import React from "react";
import { View, Image, Text } from "react-native";
import styles from "../../../App.styles";
import PropTypes from "prop-types"

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

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ImageOption
