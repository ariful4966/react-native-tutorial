//import liraries
import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

// create a component
const App = () => {
  const alertme = ()=>{
      Alert.alert('Hello World')
  }
  return (
    <View style={styles.container}>
      <Button onPress={alertme} title="Save" color="green"/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',

    color: '#fff',
  },
  
});

//make this component available to the app
export default App;
