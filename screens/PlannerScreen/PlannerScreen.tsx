import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import slugify from "slugify";
import ExerciseItem from "../../components/ExerciseItem";
import ExerForm, { ExerFormData } from "../../components/ExerForm/ExerForm";
import Modal from "../../components/Modal";
import PressableText from "../../components/styled/PressableText";
import WorkoutForm, {
  ExerciseForm,
} from "../../components/WorkoutForm/WorkoutForm";
import { storeWorkout } from "../../storage/workouts";
import { SequenceItem, SequenceType, Workout } from "../../types/data";
import styles from "./PlannerScreen.style";

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {
  const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);
  const handleExerSubmit = (form: ExerciseForm) => {
    const sequenceItem: SequenceItem = {
      slug: slugify(form.name + " " + Date.now(), { lower: true }),
      name: form.name,
      type: form.type as SequenceType,
      duration: Number(form.duration),
    };

    if (form.reps) {
      sequenceItem.reps = Number(form.reps);
    }

    setSeqItems([...seqItems, sequenceItem]);
  };

  const computeDiff = (exercisesCount: number, workoutDuration: number) => {
    const intensity = workoutDuration / exercisesCount;

    if (intensity <= 60) {
      return "hard";
    } else if (intensity <= 100) {
      return "normal";
    } else {
      return "easy";
    }
  };

  const handleWorkoutSubmit = async (form: ExerFormData) => {
    if (seqItems.length > 0) {
      const duration = seqItems.reduce((acc, curr) => acc + curr.duration, 0);
      const workout: Workout = {
        name: form.name,
        slug: slugify(form.name + " " + Date.now(), { lower: true }),
        difficulty: computeDiff(seqItems.length, duration),
        sequence: [...seqItems],
        duration,
      };

      await storeWorkout(workout);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={seqItems}
        renderItem={({ item, index }) => (
          <ExerciseItem item={item}>
            <PressableText
              text="Remove"
              onPressIn={() => {
                const items = [...seqItems];
                items.splice(index, 1);
                setSeqItems(items);
              }}
            />
          </ExerciseItem>
        )}
        keyExtractor={(item) => item.slug}
      />
      <WorkoutForm onSubmit={handleExerSubmit} />

      <View>
        <Modal
          activator={({ handleOpen }) => (
            <PressableText
              style={{ marginTop: 15 }}
              text="Create Workout"
              onPress={handleOpen}
            />
          )}
        >
          {({ handleOpen, handleClose }) => (
            <View>
              <ExerForm
                onSubmit={async (data) => {
                  await handleWorkoutSubmit(data);
                  handleClose();
                  navigation.navigate("Home");
                }}
              />
            </View>
          )}
        </Modal>
      </View>
    </View>
  );
};

export default PlannerScreen;
