import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView} from 'react-native';
import styles from './App.styles';
import ImageOption from './src/components/ImageOption';

export default function App() {
  // console.log("Hello from console log!");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>


      <View style={styles.optionsContainer}>

        <ImageOption />
        <ImageOption />
        <ImageOption />
        <ImageOption />

      </View>

      <StatusBar style="auto" />

    </SafeAreaView>
  );
}
