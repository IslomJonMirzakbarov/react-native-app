import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { getWorkouts, initWorkouts, clearWorkouts } from "../storage/workouts";

const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        await clearWorkouts('workout-data');
        await initWorkouts();
        await Font.loadAsync({
          montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        const workouts = await getWorkouts();
        setIsLoadingComplete(true);
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
