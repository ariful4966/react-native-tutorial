//import liraries
import React from 'react';
import { StyleSheet, View } from 'react-native';

// create a component
const App = () => {
 
  return (
    <View style={styles.container}>
     <View style={[styles.width, {backgroundColor: 'red', height: 700, width: 100}]}></View>
     {/* <View style={[styles.width, {backgroundColor: 'blue', height: 35, width: 200}]}></View>
     <View style={[styles.width, {backgroundColor: 'real', height: 50, width: 300}]}></View>
     <View style={[styles.width, {backgroundColor: 'red', height: 50, width: 360}]}></View> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  width: {
    width: 200
    
  }
  
});

//make this component available to the app
export default App;
