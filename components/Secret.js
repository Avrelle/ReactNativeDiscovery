import { StyleSheet, View, Text } from 'react-native';

export default function User() {
    
  return (
     <View>
        <Text styles={styles.color}> Admin </Text>
     </View>
  );
}

const styles = StyleSheet.create({
  color: {
    color: 'white'
  },
});
