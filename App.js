//import liraries
import React from 'react';
import { StyleSheet, View } from 'react-native';

// create a component
const App = () => {
 
  return (
    <View style={styles.container}>
     <View style={[styles.width, {backgroundColor: 'red',flex:1}]}></View>
     <View style={[styles.width, {backgroundColor: 'blue',flex:1}]}></View>
     <View style={[styles.width, {backgroundColor: 'real',flex:1}]}></View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 3,
    color: '#fff',
  },
  width: {
    // flex: 1,
  }
  
});

//make this component available to the app
export default App;
