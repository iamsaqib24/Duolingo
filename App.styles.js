import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      paddingTop: 40,
    },
    title: {
      fontSize: 20,
      margin: 10,
      fontWeight: "bold",
      alignSelf: "stretch",
    },

    optionsContainer: {
      width: '100%',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignContent: 'space-between',
    },

    optionContainer: {
      borderWidth: 2,
      borderBottomWidth: 4,
      borderColor: 'lightgray',
      borderRadius: 10,

      padding: 10,

      alignItems: 'center',

      width: '48%',
      height: '48%',
    },
    optionImage: {
      width: '100%',
      flex: 1,
    },
    optionText: {}
  });

  export default styles;
