import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Image, Modal } from "react-native";
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
        <Image blurRadius={1} source={require("../../assets/favicon.png")} />
        <Input
          label="Goal"
          onChangeText={setTitle}
          value={title}
          style={styles.inputStyle}
        />
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
    flex: 1,
    width: "70%",
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  inputStyle: {},
});

export default GoalInput;
