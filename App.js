import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/compontents/Main";
import { NativeRouter } from "react-router-native";
import createApolloClient from "./src/utils/apolloClient";
import { ApolloProvider } from "@apollo/client";
import Constants from "expo-constants";

const apolloClient = createApolloClient();
export default function App() {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
