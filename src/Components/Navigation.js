import { Button, View, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../store/toggle.slice";

const Navigation = (props) => {
  const toggles = useSelector((state) => state.toggle);
  const dispatch = useDispatch();

  const loginButtonHandler = () => {
    console.log("login button");
    console.log(toggles);
    dispatch(toggleActions.toggleLogin());
  };

  const registerButtonHandler = () => {
    console.log("register button");
    console.log(toggles);

    dispatch(toggleActions.toggleRegister());
  };

  const noteButtonHandler = () => {
    dispatch(toggleActions.toggleChangeNote());
  };

  const passwordButtonHandler = () => {
    dispatch(toggleActions.toggleChangePassword());
  };

  return (
    <View style={styles.container}>
      {(toggles.register || toggles.login) && (
        <>
          <Button title="Log in" onPress={loginButtonHandler} />
          <Button title="Register" onPress={registerButtonHandler} />
        </>
      )}
      {!toggles.register && !toggles.login && (
        <>
          <Button title="Change Note" onPress={noteButtonHandler} />
          <Button title="Change Password" onPress={passwordButtonHandler} />
          <Button title="Log out" onPress={loginButtonHandler} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
});

export default Navigation;
