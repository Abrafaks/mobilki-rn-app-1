import { StyleSheet, View } from "react-native";
import React from "react";
import Navigation from "./Components/Navigation";
import AuthPage from "./Components/Auth/AuthPage";
import AuthorizedPage from "./Components/AuthorizedContent/AuthorizedPage";

const Index = (props) => {
  return (
    <View style={styles.container}>
      <Navigation loginButtonHandler registerButtonHandler />

      <AuthPage />
      <AuthorizedPage />
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
