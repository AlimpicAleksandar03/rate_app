import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";
import { ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: theme.colors.textPrimary,
    display: "flex",
    flexDirection: "row",
  },
  separator: {
    paddingLeft: 5,
    paddingRight: 5,
  },

  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable
          style={[
            {
              display: "flex",
              flexDirection: "row",
            },
          ]}
        >
          <Link to="/" style={styles.separator}>
            <Text color="primary">Repositories</Text>
          </Link>
          <Link to="/signin" style={styles.separator}>
            <Text color="primary">Sign in</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
