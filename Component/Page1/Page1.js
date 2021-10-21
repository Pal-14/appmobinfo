import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getDataApi } from "../Outil/Fonction";

export default function Page1() {
  const [dataApi, setDataApi] = useState();

  useEffect(() => {
    getDataApi(setDataApi);
  }, [dataApi === undefined]);

  return (
    <ScrollView
    horizontal={false}>
      <View style={style.container}>
        <Text style={style.titre}>L'info en direct</Text>

        <View style={style.container1}>
          <Text> Name: {dataApi?.articles[0]?.source?.id}</Text>
          <Text> </Text>
          <Text> Author : {dataApi?.articles[0]?.author}</Text>
          <Text> </Text>
          <Text></Text>
          <Text> Title : </Text>
          <Text></Text>
          <Text>{dataApi?.articles[0]?.title}</Text>
          <Text> </Text>
          <Text> Description : </Text>
          <Text>{dataApi?.articles[0]?.description}</Text>
          <Text> </Text>
          <Text></Text>
          <Text> Url : {dataApi?.articles[0]?.url}</Text>
          <Text> </Text>
          <Text> Published At: {dataApi?.articles[0]?.publishedAt} </Text>
          <Text> </Text>
          <Text></Text>
          <Text> Content :</Text>
          <Text> {dataApi?.articles[0]?.content}</Text>
        </View>

        <View style={style.container1}>
          <Text> Name: {dataApi?.articles[1]?.source?.id}</Text>
          <Text> </Text>
          <Text> Author : {dataApi?.articles[1]?.author}</Text>
          <Text> </Text>
          <Text></Text>
          <Text> Title : </Text>
          <Text></Text>
          <Text>{dataApi?.articles[1]?.title}</Text>
          <Text> </Text>
          <Text> Description : </Text>
          <Text>{dataApi?.articles[1]?.description}</Text>
          <Text> </Text>
          <Text></Text>
          <Text> Url : {dataApi?.articles[1]?.url}</Text>
          <Text> </Text>
          <Text> Published At: {dataApi?.articles[1]?.publishedAt} </Text>
          <Text> </Text>
          <Text></Text>
          <Text> Content :</Text>
          <Text> {dataApi?.articles[1]?.content}</Text>
        </View>

        <View style={style.container1}>
          <Text> Name: {dataApi?.articles[2]?.source?.id}</Text>
          <Text> </Text>
          <Text> Author : {dataApi?.articles[2]?.author}</Text>
          <Text> </Text>
          <Text></Text>
          <Text> Title : </Text>
          <Text></Text>
          <Text>{dataApi?.articles[2]?.title}</Text>
          <Text> </Text>
          <Text> Description : </Text>
          <Text>{dataApi?.articles[2]?.description}</Text>
          <Text> </Text>
          <Text></Text>
          <Text> Url : {dataApi?.articles[2]?.url}</Text>
          <Text> </Text>
          <Text> Published At: {dataApi?.articles[2]?.publishedAt} </Text>
          <Text> </Text>
          <Text></Text>
          <Text> Content :</Text>
          <Text> {dataApi?.articles[2]?.content}</Text>
        </View>

        <View style={style.container1}>
          <Text> Name: {dataApi?.articles[3]?.source?.id}</Text>
          <Text> </Text>
          <Text> Author : {dataApi?.articles[3]?.author}</Text>
          <Text> </Text>
          <Text></Text>
          <Text> Title : </Text>
          <Text></Text>
          <Text>{dataApi?.articles[3]?.title}</Text>
          <Text> </Text>
          <Text> Description : </Text>
          <Text>{dataApi?.articles[3]?.description}</Text>
          <Text> </Text>
          <Text></Text>
          <Text> Url : {dataApi?.articles[3]?.url}</Text>
          <Text> </Text>
          <Text> Published At: {dataApi?.articles[3]?.publishedAt} </Text>
          <Text> </Text>
          <Text></Text>
          <Text> Content :</Text>
          <Text> {dataApi?.articles[3]?.content}</Text>
        </View>

        <View style={style.container1}>
          <Text> Name: {dataApi?.articles[4]?.source?.id}</Text>
          <Text> </Text>
          <Text> Author : {dataApi?.articles[4]?.author}</Text>
          <Text> </Text>
          <Text></Text>
          <Text> Title : </Text>
          <Text></Text>
          <Text>{dataApi?.articles[4]?.title}</Text>
          <Text> </Text>
          <Text> Description : </Text>
          <Text>{dataApi?.articles[4]?.description}</Text>
          <Text> </Text>
          <Text></Text>
          <Text> Url : {dataApi?.articles[4]?.url}</Text>
          <Text> </Text>
          <Text> Published At: {dataApi?.articles[4]?.publishedAt} </Text>
          <Text> </Text>
          <Text></Text>
          <Text> Content :</Text>
          <Text> {dataApi?.articles[4]?.content}</Text>
        </View>

        <View style={style.container1}>
          <Text> Name: {dataApi?.articles[5]?.source?.id}</Text>
          <Text> </Text>
          <Text> Author : {dataApi?.articles[5]?.author}</Text>
          <Text> </Text>
          <Text></Text>
          <Text> Title : </Text>
          <Text></Text>
          <Text>{dataApi?.articles[5]?.title}</Text>
          <Text> </Text>
          <Text> Description : </Text>
          <Text>{dataApi?.articles[5]?.description}</Text>
          <Text> </Text>
          <Text></Text>
          <Text> Url : {dataApi?.articles[5]?.url}</Text>
          <Text> </Text>
          <Text> Published At: {dataApi?.articles[5]?.publishedAt} </Text>
          <Text> </Text>
          <Text></Text>
          <Text> Content :</Text>
          <Text> {dataApi?.articles[5]?.content}</Text>
        </View>

        <View style={style.container1}>
          <Text> Name: {dataApi?.articles[6]?.source?.id}</Text>
          <Text> </Text>
          <Text> Author : {dataApi?.articles[6]?.author}</Text>
          <Text> </Text>
          <Text></Text>
          <Text> Title : </Text>
          <Text></Text>
          <Text>{dataApi?.articles[6]?.title}</Text>
          <Text> </Text>
          <Text> Description : </Text>
          <Text>{dataApi?.articles[6]?.description}</Text>
          <Text> </Text>
          <Text></Text>
          <Text> Url : {dataApi?.articles[6]?.url}</Text>
          <Text> </Text>
          <Text> Published At: {dataApi?.articles[6]?.publishedAt} </Text>
          <Text> </Text>
          <Text></Text>
          <Text> Content :</Text>
          <Text> {dataApi?.articles[6]?.content}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  titre: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 1,
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
  container1: {
    flexDirection: "column",
    margin: 20,
    borderWidth: 2,
    borderColor: "black",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems:"center",
  },

 
});

{
  /* <Image
}
source={{
  uri: 'https://s.yimg.com/os/creatr-uploaded-images/2021-10/3f1fdd10-3081-11ec-af7f-02d98e33fc20',
}}
/> */
}
