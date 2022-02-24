import { useEffect, useState } from "react";
import { getSingleWorkout } from "../storage/workouts";
import { Workout } from "../types/data";



const useSingleWorkout = (slug: string) => {
  const [workout, setWorkout] = useState<Workout>();

  useEffect(() => {
    const getData = async () => {
      const _workout = await getSingleWorkout(slug);
      setWorkout(_workout);
    };

    getData();
  }, []);

  return workout;
};

export default useSingleWorkout;
