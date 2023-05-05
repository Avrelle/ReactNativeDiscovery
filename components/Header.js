import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text> Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header : { 
   justifyContent: 'center',
   backgroundColor: "purple",
   alignItems:'center',
   height: 70,
   
   
  }
});