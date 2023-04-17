import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GoalList = ({ goals }) => {
  return (
    <View>
      {goals.length > 0 &&
        goals.map((g) => (
          <Text style={styles.goal} key={g.index}>
            {g}
          </Text>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  goal: {
    backgroundColor: "red",
    margin: 5,
    width: 250,
    textAlign: "center",
    borderRadius: 10,
    paddingVertical: 3,
  },
});

export default GoalList;
