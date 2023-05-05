import React from "react";
import { StyleSheet, Text, View} from 'react-native';
import Footer from "../component/Footer";
import Header from "../component/Header";
import Main from "../component/Main";


export default function Home() {
  return (

    <View style={styles.container}>
    <Header/>
     <Main>
      <View>
        <Text> Welcome Homepage </Text>
      </View>
     </Main>
    <Footer/>
    </View>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
