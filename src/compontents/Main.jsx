import React from "react";
import AppBar from "./AppBar";
import { Text, StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import { Route, Switch, Redirect } from "react-router-native";
import SignIn from "./Signin";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;
