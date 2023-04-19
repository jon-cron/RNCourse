import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Input } from "react-native-elements";

const GoalInput = ({ addGoal, modalVisible }) => {
  const [title, setTitle] = useState("");
  const handlePress = () => {
    addGoal(title);
    setTitle("");
  };
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.container}>
        <Input label="Goal" onChangeText={setTitle} value={title} />
        {title === "" ? (
          <Button title="button" disabled />
        ) : (
          <Button title="button" onPress={handlePress} />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: 35,
    // justifyContent: "center",
  },
});

export default GoalInput;
