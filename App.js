import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button, Alert, Pressable} from 'react-native';
import styles from './App.styles';

export default function App() {
  // console.log("Hello from console log!");
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={() => Alert.alert("from pressable")}>
        <Text>Press me</Text>
      </Pressable>
      <Text>I'm Saqib, started learning React Native!</Text>
      <TextInput
        placeholder="Write here"
        style={styles.input}
      />
      <Button
        title="Click me"
        onPress={() => Alert.alert('Simple Button pressed')}
        // color="#007AFF"
        // disabled
        style={styles.btn}
      />
      <StatusBar style="auto" />
    </View>
  );
}
