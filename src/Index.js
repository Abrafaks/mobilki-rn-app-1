import { StyleSheet, View } from "react-native";
import React from "react";
import Navigation from "./Components/Navigation";
import AuthPage from "./Components/Auth/AuthPage";
import AuthorizedPage from "./Components/AuthorizedContent/AuthorizedPage";
import Error from "./Components/Error/Error";

const Index = (props) => {
  return (
    <View style={styles.container}>
      <Navigation />

      <AuthPage />
      <AuthorizedPage />
      <Error />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    margin: 60,
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default Index;
