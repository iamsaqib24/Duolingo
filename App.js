import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView} from 'react-native';
import styles from './App.styles';
import ImageOption from './src/components/ImageOption';
import question from './assets/data/oneQuestionWithOption';

export default function App() {
  // console.log("Hello from console log!");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{question.question}</Text>


      <View style={styles.optionsContainer}>

        {question.options.map((option) => ( <ImageOption key={option.id} image={option.image} text={option.text} />))}


      </View>

      <StatusBar style="auto" />

    </SafeAreaView>
  );
}
