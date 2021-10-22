import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Page2() {}
Page2 = () => {
  return (
    <View style={{flex:1,flexDirection:"column"}}>

       <View style={{flexDirection:"row",flex:1}}>
      <View style={{flexDirection:"column",flex:2}}>
        <Text>name: </Text>

        <Text>Page 2</Text>

        <Text>Page 2</Text>

        <Text>Page 2</Text>

        <Text>Page 2</Text>

        <Text>Page 2</Text>
      </View>
        <View style={{flexDirection:"column",flex:1}}>
            <Text>img </Text>
            <Text>link </Text>
            <Text>url </Text>
        </View>

</View> 

    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({});
