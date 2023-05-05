import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
    </View>
  );
}

const styles = StyleSheet.create({
  main : {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems:'center',
  }
});