import React from "react";
import { useSelector } from "react-redux";
import Register from "./Register";
import { View } from "react-native";
import Login from "./Login";

const AuthPage = (props) => {
  const toggles = useSelector((state) => state.toggle);

  return (
    <View>
      {toggles.register && <Register />}
      {toggles.login && <Login />}
    </View>
  );
};

export default AuthPage;
