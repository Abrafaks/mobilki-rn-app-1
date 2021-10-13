import { View, Text } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import ChangeNoteForm from "../../UI/ChangeNoteForm";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/user.slice";

const ChangeNote = (props) => {
  const dispatch = useDispatch();
  const { note, token } = useSelector((state) => state.user);
  const [successMessage, setSuccessMessage] = useState("");

  const ChangeNoteHandler = async (user) => {
    try {
      const changePassword = await axios.put(
        "http://192.168.1.88:3000/user/",
        {
          note: user.note,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(userActions.addNote(user.note));
      setSuccessMessage("Note changed successfully");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Text>{successMessage}</Text>
      <ChangeNoteForm text="Change Note" onPressHandler={ChangeNoteHandler} />
      <Text>{note}</Text>
    </View>
  );
};

export default ChangeNote;
