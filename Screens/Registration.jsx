import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import InputGroup from "../components/InputGroup/InputGroup";

const Registration = () => {
  const [userInfo, setUserInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.mainHeading}>Welcome to the LMS</Text>
        <Text style={styles.heading}>User Registration</Text>
        <InputGroup title={"First Name"} value={userInfo.fname} />
        <InputGroup title={"Last Name"} value={userInfo.lname} />
        <InputGroup title={"Email"} value={userInfo.email} />
        <InputGroup title={"Username"} value={userInfo.username} />
        <InputGroup title={"Password"} value={userInfo.password} />
        <InputGroup
          title={"Confirm Password"}
          value={userInfo.confirmPassword}
        />
        <View style={styles.btnGroup}>
          <CustomButton title={"Clear"} color={"black"} />
          <CustomButton title={"Clear"} color={"black"} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    paddingLeft: 20,
    flex: 1,
    textAlign: "left",
  },
  mainHeading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
  },
  btnGroup: {
    flexDirection: "row",
    marginTop: 20,
    marginRight: 15,
    marginBottom: 30,
    justifyContent: "flex-end",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  btnStyle: {
    paddingHorizontal: 32,
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export default Registration;
