import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { apiRomain, getDataApi } from "../Outil/Fonction";

export default function pageRomain() {
  const [api, setApi] = useState();
  function apiRomain(setApi) {
    fetch(
      "https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=646570"
    )
      .then((response) => {
        return response.json();
      })
      .then((responseObject) => {
        setApi(responseObject);
        console.log("dataApi", responseObject);
      });
  }
  
  useEffect(() => {
    apiRomain(setApi);
  }, [api === undefined ]);

  return (
    <ScrollView horizontal={false}>
      <View>
        <Text style={{color:"black"}}> {api?.appnews?.newsitems[0].title} </Text>
        <Text style={{color:"black"}}> {api?.appnews?.newsitems[0]. author} </Text>
        <Text style={{color:"black"}}> {api?.appnews?.newsitems[0]. contents} </Text>
       
        
      </View>
    </ScrollView>
  );
}
