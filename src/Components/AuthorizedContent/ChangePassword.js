import { View, Text } from "react-native";
import React, { useState } from "react";
import ChangePasswordForm from "../../UI/ChangePasswordForm";
import axios from "axios";
import { useSelector } from "react-redux";

const ChangePassword = (props) => {
  const { password, token } = useSelector((state) => state.user);
  const [successMessage, setSuccessMessage] = useState("");
  const { ip } = useSelector((state) => state.backend);

  const changePasswordHandler = async (user) => {
    try {
      if (user.newPassword !== user.repeatNewPassword) {
        setSuccessMessage("Please enter valid password");
        return;
      }
      const changePassword = await axios.put(
        `http://${ip}:3000/user/`,
        {
          password: user.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccessMessage("Password changed successfully");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Text>{successMessage}</Text>
      <ChangePasswordForm
        text="Change Password"
        onPressHandler={changePasswordHandler}
      />
    </View>
  );
};

export default ChangePassword;
