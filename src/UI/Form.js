import { Button, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import isStrongPassword from "validator/es/lib/isStrongPassword";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user.slice";
import { toggleActions } from "../../store/toggle.slice";
import { errorActions } from "../../store/error.slice";

const Form = (props) => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const { disableSubmitButton } = useSelector((state) => state.toggle);
  const dispatch = useDispatch();

  const loginChangeHandler = (input) => {
    setLogin(input.trim());
  };

  const passwordChangeHandler = (input) => {
    setPassword(input.trim());
  };

  const onPressHandler = async () => {
    if (!login || !password) {
      dispatch(errorActions.setCustomError("Please enter all values."));
      return;
    }
    if (!isStrongPassword(password)) {
      dispatch(
        errorActions.setCustomError(
          "Password must be strong (8 characters long, 1 lowercase, 1 uppercase, 1 digit, 1 special character)."
        )
      );

      return;
    }

    props.onPressHandler({ login, password });
    dispatch(toggleActions.disableSubmitButton());
    setPassword(null);
    setLogin(null);
  };

  return (
    <View>
      <Text>{props.text}</Text>
      <TextInput
        placeholder="Login"
        onChangeText={loginChangeHandler}
        value={login}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={passwordChangeHandler}
        value={password}
      />
      <Button
        disabled={disableSubmitButton}
        title={props.text}
        onPress={onPressHandler}
      />
    </View>
  );
};

export default Form;
