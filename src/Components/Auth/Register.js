import { View } from "react-native";
import React from "react";
import Form from "../../UI/Form";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/user.slice";
import axios from "axios";
import { toggleActions } from "../../../store/toggle.slice";

const Register = (props) => {
  const dispatch = useDispatch();
  const { ip } = useSelector((state) => state.backend);

  const registerHandler = async (user) => {
    dispatch(userActions.addUser(user));

    try {
      const registerResponse = await axios.post(
        `http://${ip}:3000/user/`,
        user
      );
      if (registerResponse.status === 201) {
        const loginResponse = await axios.post(
          `http://${ip}:3000/auth/login`,
          {},
          {
            auth: {
              username: user.login,
              password: user.password,
            },
          }
        );

        dispatch(userActions.addToken(loginResponse.data.token));
        dispatch(toggleActions.toggleChangeNote());
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Form text="Register" onPressHandler={registerHandler} />
    </View>
  );
};

export default Register;
