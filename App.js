import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Practice App</Text>
      <Input label="Name" onChangeText={setName} value={name} />
      <Input label="Age" onChangeText={setAge} value={age} />
      {/* <TouchableOpacity>
        <Text>Button</Text>
      </TouchableOpacity> */}
      <Button title="button" onPress={() => console.log(name, age)} />
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
  h1: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
