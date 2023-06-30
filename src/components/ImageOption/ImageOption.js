import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "../../../App.styles";
import PropTypes from "prop-types"

const ImageOption = (props) => {
  // console.log(props);
  const { image, text, isSelected, onPress } = props;

    return (
      <Pressable
        onPress={onPress}
        style={[styles.optionContainer, isSelected ? styles.selectedContainer : {} ]}>
        <Image
          source={{ uri: image}}
          style={styles.optionImage}
          resizeMode='contain'
          />
          <Text style={[isSelected ? styles.selectedText : styles.optionText]}>{text}</Text>
      </Pressable>
    )
}

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func
}

ImageOption.defaultProps = {
  isSelected: true,
  onPress: () => {},
}

export default ImageOption
