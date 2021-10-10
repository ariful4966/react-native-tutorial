//import liraries
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const myData = [
  {
    title: 'Bangladesh',
    subTitle: 'My Country',
  },
  {
    title: 'Idia',
    subTitle: 'My Country',
  },
  {
    title: 'Pakistan',
    subTitle: 'My Country',
  },
  {
    title: 'America',
    subTitle: 'My Country',
  },
  {
    title: 'Frech',
    subTitle: 'My Country',
  },
  {
    title: 'Italy',
    subTitle: 'My Country',
  },
  {
    title: 'Portugal',
    subTitle: 'My Country',
  },
  {
    title: 'Canada',
    subTitle: 'My Country',
  },
  {
    title: 'Oman',
    subTitle: 'My Country',
  },
  {
    title: 'England',
    subTitle: 'My Country',
  },
  {
    title: 'South Koria',
    subTitle: 'My Country',
  },
];

const Childview = ({title, subTitle}) => {
  console.log(title);
  return (
    <View style={{backgroundColor: 'purple', padding: 10, margin: 5}}>
      <Text style={{color: 'black', fontSize: 18}}>{title}</Text>
      <Text style={{color: 'orange', fontSize: 12}}>{subTitle}</Text>
    </View>
  );
};

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={myData}
        renderItem={({item}) => (
          <Childview title={item.title} subTitle={item.subTitle}></Childview>
        )}
        keyExtractor={(_, idx) => idx}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'white',
  },
});

//make this component available to the app
export default App;
