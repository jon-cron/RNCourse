import React from "react";
import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";

const GoalList = ({ goals, deleteItem }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={goals}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        renderItem={(itemData) => {
          return (
            <Pressable
              style={styles.goal}
              onPress={() => deleteItem(itemData.item.id)}
            >
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </Pressable>
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
