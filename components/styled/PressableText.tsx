import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

const PressableText = (props: PressableProps & { text: string }) => {
  return (
    <Pressable {...props}>
      <Text style={{ textDecorationLine: "underline" }}>{props.text}</Text>
    </Pressable>
  );
};

export default PressableText;
