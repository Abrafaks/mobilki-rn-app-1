import { StyleSheet, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Error = (props) => {
  const { error } = useSelector((state) => state.error);
  console.log("current error: ", error);
  return <Text style={styles.errorMessage}>{error}</Text>;
};

export const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
  },
});

export default Error;
