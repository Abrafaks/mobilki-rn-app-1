import { View } from "react-native";
import React from "react";
import Form from "../../UI/Form";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/user.slice";
import axios from "axios";
import { toggleActions } from "../../../store/toggle.slice";

const Login = (props) => {
  const dispatch = useDispatch();

  const loginHandler = async (user) => {
    dispatch(userActions.addUser(user));

    try {
      const loginResponse = await axios.post(
        "http://150.254.68.251:3000/auth/login",
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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Form text="Login" onPressHandler={loginHandler} />
    </View>
  );
};

export default Login;
