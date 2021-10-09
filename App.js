//import liraries
import React from 'react';
import { StyleSheet, View } from 'react-native';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}></View>
      <View style={styles.subcontainer2}></View>
      <View style={styles.subcontainer3}></View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',

    color: '#fff',
  },
  subcontainer: {
    backgroundColor: 'orange',
    width: '33.3%',
    height: '100%',
  },
  subcontainer2: {
    backgroundColor: 'red',
    width: '33.3%',
    height: '100%',
  },
  subcontainer3: {
    backgroundColor: 'black',
    width: '33.3%',
    height: '100%',
  },
});

//make this component available to the app
export default App;
