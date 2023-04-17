import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const GoalList = ({ goals }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={goals}
        keyExtractor={goals.index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.goal}>
              <Text style={styles.goalText}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
  // return (
  //   <View>
  //     {goals.length > 0 &&
  //       goals.map((g) => (
  //         <Text style={styles.goal} key={g.index}>
  //           {g}
  //         </Text>
  //       ))}
  //   </View>
  // );
};

const styles = StyleSheet.create({
  goal: {
    backgroundColor: "#333",
    margin: 5,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  goalText: {
    textAlign: "center",
    color: "white",
  },
  container: {
    height: 50,
    marginTop: 20,
  },
});

export default GoalList;
