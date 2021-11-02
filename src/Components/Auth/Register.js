import { View } from "react-native";
import React from "react";
import Form from "../../UI/Form";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/user.slice";
import axios from "axios";
import { toggleActions } from "../../../store/toggle.slice";
import { errorActions } from "../../../store/error.slice";

const Register = (props) => {
  const dispatch = useDispatch();
  const { ip } = useSelector((state) => state.backend);

  const registerHandler = async (user) => {
    dispatch(userActions.addUser(user));

    try {
      const registerResponse = await axios
        .post(`http://${ip}:3000/user/`, user)
        .catch((e) => {
          if (e.response.status === 400) {
            dispatch(
              errorActions.setCustomError(
                "User with this login is already registered"
              )
            );
          } else {
            dispatch(errorActions.setError("unknown"));
          }
        });

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

        dispatch(toggleActions.enableSubmitButton());

        if (loginResponse) {
          dispatch(errorActions.setError(0));
          dispatch(userActions.addToken(loginResponse.data.token));
          dispatch(toggleActions.toggleChangeNote());
        }
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
