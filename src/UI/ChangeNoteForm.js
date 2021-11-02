import { Button, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import isStrongPassword from "validator/es/lib/isStrongPassword";
import { toggleActions } from "../../store/toggle.slice";
import { useDispatch } from "react-redux";
import { errorActions } from "../../store/error.slice";

const ChangeNoteForm = (props) => {
  const [note, setNote] = useState(null);
  const dispatch = useDispatch();

  const noteChangeHandler = (input) => {
    setNote(input);
  };

  const onPressHandler = async () => {
    if (!note.trim()) {
      console.log("set error please enter all values");
      dispatch(errorActions.setCustomError("Please enter all values."));
      return;
    }

    dispatch(toggleActions.disableSubmitButton());

    props.onPressHandler({ note });
    setNote(null);
  };

  return (
    <View>
      <Text>{props.text}</Text>
      <TextInput
        placeholder="Enter Note"
        onChangeText={noteChangeHandler}
        value={note}
      />
      <Button title={props.text} onPress={onPressHandler} />
    </View>
  );
};

export default ChangeNoteForm;
