import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput, View } from "react-native";
import PressableText from "../styled/PressableText";
import styles from "./ExerForm.style";

export type ExerFormData = {
  name: string;
};

type ExerProps = {
  onSubmit: (form: ExerFormData) => void;
};

const ExerForm = ({ onSubmit }: ExerProps) => {
  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.container}>
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
            placeholder="Exer name"
            placeholderTextColor={"rgba(0,0,0, 0.4)"}
          />
        )}
      />
      <PressableText
        style={{ marginTop: 10 }}
        text="Confirm"
        onPress={handleSubmit((data) => {
          onSubmit(data as ExerFormData);
        })}
      />
    </View>
  );
};

export default ExerForm;
