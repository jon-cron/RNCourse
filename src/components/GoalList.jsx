import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GoalList = ({ goals }) => {
  return (
    <View>{goals.length > 0 && goals.forEach((g) => <Text>{g}</Text>)}</View>
  );
};

const styles = StyleSheet.create({});

export default GoalList;
