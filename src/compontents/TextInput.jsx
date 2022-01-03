import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
  const errorStyle = { borderColor: "#d73a4a" };
  const textInputStyle = [style, error && errorStyle];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
