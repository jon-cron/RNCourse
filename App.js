import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import GoalList from "./src/components/GoalList.jsx";
export default function App() {
  const [title, setTitle] = useState("");
  const [goals, setGoals] = useState([]);
  const deleteItem = (id) => {
    setGoals((currentGoals) => currentGoals.filter((g) => g.id != id));
  };
  const handlePress = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: title, id: Math.random().toString() },
    ]);
    setTitle("");
    console.log(goals);
  };
  // NOTE I will get some coding done later
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Practice App</Text>
      <Input label="Goal" onChangeText={setTitle} value={title} />
      {title === "" ? (
        <Button title="button" disabled />
      ) : (
        <Button title="button" onPress={handlePress} />
      )}
      <GoalList goals={goals} deleteItem={deleteItem} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: 35,
    // justifyContent: "center",
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
