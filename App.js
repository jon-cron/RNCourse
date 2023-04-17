import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
export default function App() {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Input label="Name" onChangeText={setName} value={name} />
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
