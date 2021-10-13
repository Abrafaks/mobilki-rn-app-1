import { Button, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import isStrongPassword from "validator/es/lib/isStrongPassword";

const ChangeNoteForm = (props) => {
  const [note, setNote] = useState(null);

  const noteChangeHandler = (input) => {
    setNote(input.trim());
  };

  const onPressHandler = async () => {
    if (!note) {
      console.log("set error please enter all values");
      return;
    }

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
