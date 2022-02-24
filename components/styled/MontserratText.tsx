import { Text } from "react-native";

export const MontserratText = (props: Text["props"]) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: "montserrat" }]} />
  );
};
