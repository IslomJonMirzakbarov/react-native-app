import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import PressableText from "../styled/PressableText";
import styles from "./WorkoutForm.style";

export type ExerciseForm = {
  name: string;
  duration: string;
  type: string;
  reps?: string;
};

type WorkoutProps = {
  onSubmit: (form: ExerciseForm) => void;
};

const WorkoutForm = ({ onSubmit }: WorkoutProps) => {
  const { control, handleSubmit } = useForm();
  const [isSelectionOn, setSelectionOn] = useState(false);

  const selectionItems = ["exercises", "break", "stretch"];

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.rowContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="name"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder="Name"
              />
            )}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="duration"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder="Duration"
              />
            )}
          />
        </View>
        <View style={styles.rowContainer}>
          <Controller
            control={control}
            name="reps"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder="Repetitions"
              />
            )}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="type"
            render={({ field: { onChange, value } }) => (
              <View style={{ flex: 1 }}>
                {isSelectionOn ? (
                  <View style={styles.typeContainer}>
                    {selectionItems.map((selection) => (
                      <PressableText
                        key={selection}
                        style={styles.selection}
                        text={selection}
                        onPress={() => {
                          setSelectionOn(false);
                          onChange(selection);
                        }}
                      />
                    ))}
                  </View>
                ) : (
                  <TextInput
                    onPressIn={() => setSelectionOn(true)}
                    style={styles.input}
                    placeholder="Type"
                    value={value}
                  />
                )}
              </View>
            )}
          />
        </View>
        <PressableText
          style={{ marginTop: 10 }}
          text="Add Exercise"
          onPress={handleSubmit((data) => {
            onSubmit(data as ExerciseForm);
          })}
        />
      </View>
    </View>
  );
};

export default WorkoutForm;
