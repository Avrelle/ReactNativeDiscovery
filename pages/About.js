import { StyleSheet, Text, View } from 'react-native';
import Footer from '../component/Footer';

export default function About() {
  return (
    <View style={styles.about}>
        <Text>About</Text>
        <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  about : {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems:'center',
  }
});