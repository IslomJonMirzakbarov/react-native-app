import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Workout } from "../types/data";
import { formatSec } from "../utils/time";

const WorkoutItem = ({
  item,
  children,
  childStyles = {},
}: {
  item: Workout;
  children?: React.ReactNode;
  childStyles?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.duration}>{formatSec(item.duration)}</Text>
      <Text style={styles.difficulty}>{item.difficulty}</Text>
      {children && <View style={childStyles}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "rgba(0,0,0, 0.1)",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  duration: {
    fontSize: 15,
  },
  difficulty: {
    fontSize: 15,
  },
});

export default WorkoutItem;
