import { View } from "react-native";
import React from "react";
import Form from "../../UI/Form";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/user.slice";
import axios from "axios";
import { toggleActions } from "../../../store/toggle.slice";
import { errorActions } from "../../../store/error.slice";

const Login = (props) => {
  const dispatch = useDispatch();
  const { ip } = useSelector((state) => state.backend);

  const loginHandler = async (user) => {
    dispatch(userActions.addUser(user));

    try {
      const loginResponse = await axios
        .post(
          `http://${ip}:3000/auth/login`,
          {},
          {
            auth: {
              username: user.login,
              password: user.password,
            },
          }
        )
        .catch((e) => {
          dispatch(errorActions.setError(e.response.status));
        });
      dispatch(toggleActions.enableSubmitButton());

      if (loginResponse) {
        dispatch(errorActions.setError(0));
        dispatch(userActions.addToken(loginResponse.data.token));
        dispatch(toggleActions.toggleChangeNote());
      }
    } catch (e) {}
  };

  return (
    <View>
      <Form text="Login" onPressHandler={loginHandler} />
    </View>
  );
};

export default Login;
