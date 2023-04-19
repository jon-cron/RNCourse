import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import GoalList from "./src/components/GoalList.jsx";
import GoalInput from "./src/components/GoalInput.jsx";
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
    toggleModal();
  };
  // NOTE I will get some coding done later
  return (
    <View style={styles.background}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "purple",
    height: "100%",
  },
  container: {
    marginTop: 50,
    alignItems: "center",
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
});
