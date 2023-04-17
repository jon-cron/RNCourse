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
    <FlatList
      horizontal
      // showsHorizontalScrollIndicator={false}
      data={goals}
      keyExtractor={goals.index}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={styles.goal}>
            <Text>{item}</Text>
          </TouchableOpacity>
        );
      }}
    />
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
    backgroundColor: "red",
    margin: 5,
    width: 250,
    height: 50,
    textAlign: "center",
    borderRadius: 10,
    paddingVertical: 3,
  },
});

export default GoalList;
