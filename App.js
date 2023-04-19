import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import GoalList from "./src/components/GoalList.jsx";
import GoalInput from "./src/components/GoalInput.js";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const deleteItem = (id) => {
    setGoals((currentGoals) => currentGoals.filter((g) => g.id != id));
  };
  const handlePress = (title) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: title, id: Math.random().toString() },
    ]);
  };
  // NOTE I will get some coding done later
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Practice App</Text>
      {modalVisible ? (
        <Button title="Cancel" color={"red"} onPress={() => toggleModal()} />
      ) : (
        <Button
          title="Add Goal"
          color={"green"}
          onPress={() => toggleModal()}
        />
      )}
      <GoalInput addGoal={handlePress} modalVisible={modalVisible} />
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
