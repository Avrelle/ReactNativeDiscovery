import { StyleSheet, Text, View,  } from 'react-native';
import React from "react";
import {Link} from "react-router-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
        <Link
          to="/"
          underlayColor="#f0f4f7"
         
        >
      <Text> Home </Text>
      </Link>
      <Link
          to="/about"
          underlayColor="#f0f4f7"
         
        >
      <Text> About </Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  footer : {
   flexDirection :'row',
   backgroundColor: "purple",
   height: 70,
   alignItems: 'center',
   justifyContent : "space-around"
   
  
   

  }
});