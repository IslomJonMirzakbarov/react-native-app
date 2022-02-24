import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getWorkouts } from "../storage/workouts";
import { Workout } from "../types/data";

const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const getData = async () => {
      const _workouts = await getWorkouts();
      setWorkouts(_workouts);
    };

    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  return workouts;
};

export default useWorkouts;
