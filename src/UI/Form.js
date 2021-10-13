import { Button, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import isStrongPassword from "validator/es/lib/isStrongPassword";

const Form = (props) => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const loginChangeHandler = (input) => {
    setLogin(input.trim());
  };

  const passwordChangeHandler = (input) => {
    setPassword(input.trim());
  };

  const onPressHandler = async () => {
    if (!login || !password) {
      console.log("set error please enter all values");
      return;
    }
    if (!isStrongPassword(password)) {
      console.log("set error password must be strong");
      return;
    }

    props.onPressHandler({ login, password });
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
      <Button title={props.text} onPress={onPressHandler} />
    </View>
  );
};

export default Form;
