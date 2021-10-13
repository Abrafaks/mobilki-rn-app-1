import { Button, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import isStrongPassword from "validator/es/lib/isStrongPassword";

const ChangePasswordForm = (props) => {
  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);

  const oldPasswordChangeHandler = (input) => {
    setOldPassword(input.trim());
  };

  const newPasswordChangeHandler = (input) => {
    setNewPassword(input.trim());
  };

  const onPressHandler = async () => {
    if (!oldPassword || !newPassword) {
      console.log("set error please enter all values");
      return;
    }
    if (!isStrongPassword(newPassword)) {
      console.log("set error password must be strong");
      return;
    }

    props.onPressHandler({ oldPassword, newPassword });
    setOldPassword(null);
    setNewPassword(null);
  };

  return (
    <View>
      <Text>{props.text}</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Old Password"
        onChangeText={oldPasswordChangeHandler}
        value={oldPassword}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="New Password"
        onChangeText={newPasswordChangeHandler}
        value={newPassword}
      />
      <Button title={props.text} onPress={onPressHandler} />
    </View>
  );
};

export default ChangePasswordForm;
