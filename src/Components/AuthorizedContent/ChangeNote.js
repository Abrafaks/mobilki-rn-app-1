import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ChangeNoteForm from "../../UI/ChangeNoteForm";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/user.slice";
import { toggleActions } from "../../../store/toggle.slice";

const ChangeNote = (props) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const { ip } = useSelector((state) => state.backend);

  useEffect(() => {
    const getNote = async () => {
      const getNoteResponse = await axios.get(`http://${ip}:3000/user/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setNote(getNoteResponse.data.note);
    };

    getNote();

    console.log(getNote);
  }, []);

  const ChangeNoteHandler = async (user) => {
    try {
      const changeNote = await axios.put(
        `http://${ip}:3000/user/`,
        {
          note: user.note,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(toggleActions.enableSubmitButton());
      setSuccessMessage("Note changed successfully");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Text>{successMessage}</Text>
      <ChangeNoteForm text="Change Note" onPressHandler={ChangeNoteHandler} />
      <Text>Your note: {note}</Text>
    </View>
  );
};

export default ChangeNote;
