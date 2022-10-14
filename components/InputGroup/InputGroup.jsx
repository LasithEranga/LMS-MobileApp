import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const InputGroup = ({ title, value, onchange }) => {
  return (
    <View style={styles.inputGroupContainer}>
      <Text style={styles.inputText}>{title}</Text>
      <TextInput style={styles.input} value={value} onChange={onchange} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroupContainer: {
    marginTop: 15,
  },

  inputText: {
    fontSize: 15,
    fontWeight: "bold",
  },

  input: {
    height: 40,
    borderWidth: 1,
    marginRight: 20,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default InputGroup;
