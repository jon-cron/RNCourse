import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <TextInput placeholder="type stuff" />
      {/* <TouchableOpacity>
        <Text>Button</Text>
      </TouchableOpacity> */}
      <Button title="button" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
