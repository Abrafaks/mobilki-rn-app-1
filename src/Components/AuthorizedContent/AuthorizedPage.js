import React from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import ChangePassword from "./ChangePassword";
import ChangeNote from "./ChangeNote";

const AuthorizedPage = (props) => {
  const toggles = useSelector((state) => state.toggle);

  return (
    <View>
      {toggles.changePassword && <ChangePassword />}
      {toggles.changeNote && <ChangeNote />}
    </View>
  );
};

export default AuthorizedPage;
