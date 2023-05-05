import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Secret from './Secret';

export default function User({props}) {
    const isAdmin = props.isAdmin;
    

    if(isAdmin){
        return ( 
            <View>
                <Text styles={styles.color}> Welcome {props.name} {props.LastName} </Text>
                {isAdmin ? <Secret/> :  
                <Text>Membre</Text>}
            </View>
       )
    }
}

const styles = StyleSheet.create({
  color: {
    color: 'white'
  },
});
