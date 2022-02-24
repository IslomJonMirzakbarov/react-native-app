import AsyncStorage from "@react-native-async-storage/async-storage";
import { containsKeys, getData, storeData } from ".";
import data from "../data.json";
import { Workout } from "../types/data";

export const getWorkouts = async (): Promise<Workout[]> => {
  const workouts = await getData("workout-data");
  return workouts;
};

export const getSingleWorkout = async (slug: string): Promise<Workout> => {
  const allWorkouts = await getWorkouts();
  const workout = allWorkouts.filter((w) => w.slug === slug)[0];
  return workout;
};

export const initWorkouts = async (): Promise<boolean> => {
  const hasWorkouts = await containsKeys("workout-data");
  if (!hasWorkouts) {
    await storeData("workout-data", data);
    return true;
  }

  return false;
};

export const storeWorkout = async (newWorkout: Workout): Promise<boolean> => {
  const workouts = await getWorkouts();
  await storeData("workout-data", [...workouts, newWorkout]);
  return true;
};

export const clearWorkouts = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
