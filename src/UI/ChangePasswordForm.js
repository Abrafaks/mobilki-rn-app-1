import { Button, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import isStrongPassword from "validator/es/lib/isStrongPassword";
import { errorActions } from "../../store/error.slice";
import { useDispatch } from "react-redux";

const ChangePasswordForm = (props) => {
  const [newPassword, setNewPassword] = useState(null);
  const [repeatNewPassword, setRepeatNewPassword] = useState(null);
  const dispatch = useDispatch();

  const repeatPasswordChangeHandler = (input) => {
    setRepeatNewPassword(input.trim());
  };

  const newPasswordChangeHandler = (input) => {
    setNewPassword(input.trim());
  };

  const onPressHandler = async () => {
    if (!repeatNewPassword || !newPassword) {
      dispatch(errorActions.setCustomError("Please enter all values"));
      return;
    }
    if (!isStrongPassword(newPassword)) {
      dispatch(errorActions.setCustomError("Password must be strong"));
      return;
    }

    dispatch(errorActions.setError(0));
    props.onPressHandler({ repeatNewPassword, newPassword });
    setRepeatNewPassword(null);
    setNewPassword(null);
  };

  return (
    <View>
      <Text>{props.text}</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="New Password"
        onChangeText={newPasswordChangeHandler}
        value={newPassword}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Repeat New Password"
        onChangeText={repeatPasswordChangeHandler}
        value={repeatNewPassword}
      />
      <Button title={props.text} onPress={onPressHandler} />
    </View>
  );
};

export default ChangePasswordForm;
