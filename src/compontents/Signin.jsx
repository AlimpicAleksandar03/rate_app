import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password is required"),
});
const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    padding: 7,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    color: "black",
  },
  button: {
    width: "100%",
    padding: 10,
    backgroundColor: "#0366d6",
    borderRadius: 10,
  },
});
const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const SignInForm = ({ onSubmit }) => {
    return (
      <View style={{ padding: 10 }}>
        <FormikTextInput
          name="username"
          placeholder="Username"
          style={styles.textInput}
        ></FormikTextInput>
        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
        ></FormikTextInput>
        <Pressable onPress={onSubmit} style={styles.button}>
          <Text style={{ textAlign: "center", color: "white" }}>Sign in</Text>
        </Pressable>
      </View>
    );
  };
  const onSubmit = (values) => {
    const { username, password } = values;
    console.log(username, password);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </>
  );
};

export default SignIn;
