import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import validator from "email-validator";
import LoggedInUserContext from "~/contexts/LoggedInUser";

export default function LoginScreen() {
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [userHasAccount, setUserHasAccount] = useState(true);

  const { authJwt, setAuthJwt } = useContext(LoggedInUserContext);

  const setInputDataValue = ({ key, value }) => {
    setInputData({ ...inputData, [key]: value });
  };

  useEffect(() => {
    setEmailIsValid(
      validator.validate(inputData.email) || inputData.email === ""
    );
  }, [inputData]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text h1 style={{ paddingBottom: 20 }}>
          {userHasAccount ? "Login" : "Register"}
        </Text>
        <Input
          placeholder="Username"
          value={inputData.username}
          onChangeText={(value) =>
            setInputDataValue({ key: "username", value })
          }
        />
        {!userHasAccount ? (
          <Input
            placeholder="Email"
            value={inputData.email}
            onChangeText={(value) => setInputDataValue({ key: "email", value })}
            errorStyle={{ color: "red" }}
            errorMessage={!emailIsValid ? "Invalid email" : null}
          />
        ) : null}
        <Input
          placeholder="Password"
          value={inputData.password}
          onChangeText={(value) =>
            setInputDataValue({ key: "password", value })
          }
          secureTextEntry
        />
        <Button
          containerStyle={{ width: "100%", marginBottom: 20 }}
          title="Sign in"
          onPress={() => {
            // TODO: implement sign in on the backend
            console.log("User tried to sign in");
            (async () => {
              try {
                const jwt = "TESTDATATESTDATATESTDATA";
                await AsyncStorage.setItem("session-jwt", jwt);
                setAuthJwt(jwt);
              } catch (e) {
                console.log(e);
              }
            })();
          }}
        />
        <Button
          buttonStyle={{ backgroundColor: "red" }}
          containerStyle={{ width: "100%" }}
          title={
            userHasAccount ? "I need an account" : "I already have an account"
          }
          onPress={() => {
            setUserHasAccount(!userHasAccount);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  card: {
    margin: 40,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 30,
    alignItems: "center",
  },
});
