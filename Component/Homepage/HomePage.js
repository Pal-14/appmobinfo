import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TextInput,
} from "react-native";
import Page1 from "../Page1/Page1";

export default function HomePage() {
  return (
    <View style={style.containerLog}>
     
      <View style={style.containerTitre}>
        <Text style={style.h1}> Pal-Info </Text>
      </View>

      <View style={style.button}>
        <View>
          <Button
            style={style.button}
            title="Pour voir les Infos cliquez IcI"
            color="#E26D5C"
            onPress={() =>
              Alert.alert("Vous allez être rediriger vers la page Infos ")
            }
          />
        </View>
      </View>
      <View style={style.logo}>
        <Image source={require("../../src/logoInfo.jpg")} style={style.logo} />
      </View>











      {/*  <TextInput
        style={style.input}
        keyboardType="email-address"
        placeholder="Votre Email"
        type="email"
      ></TextInput>
      <TextInput
        style={style.input}
        secureTextEntry={true}
        placeholder="Votre Mot de Passe"
        textContentType="password"
      ></TextInput> */}
    </View>
  );
}

const style = StyleSheet.create({
  containerLog: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  h1: {
    flex: 0.3,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 36,
    height: 200,
    marginTop: 200,
  },
  button: {
    flex: 0.1,
  },
  logo: {
    flexDirection: "column",
    flex: 3,
    width: 500,
    height: 500,
    borderRadius: 10,
  },
});
