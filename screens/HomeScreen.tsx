import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import ThemeText from "../components/styled/Text";
import WorkoutItem from "../components/WorkoutItem";
import useWorkouts from "../hooks/useWorkouts";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  const workouts = useWorkouts();

  return (
    <View style={styles.container}>
      <ThemeText style={styles.header}>New Workouts!</ThemeText>
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("WorkoutDetail", { slug: item.slug })
            }
          >
            <WorkoutItem item={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "montserrat-bold",
  },
});

export default HomeScreen;
