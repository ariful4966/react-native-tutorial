//import liraries
import React from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, View } from 'react-native';

const myData = [
  {
    title: 'Bangladesh',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    title: 'India',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    title: 'Pakistan',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    title: 'America',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    title: 'Frech',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    title: 'Italy',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    title: 'Portugal',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    title: 'Canada',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    title: 'Oman',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    title: 'England',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    title: 'South Koria',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
];

const Childview = ({title, subTitle, img}) => {
  const handlePresss = altTitle => {
    Alert.alert(altTitle);
  };
  return (
    <View style={{backgroundColor: 'purple', padding: 10, margin: 5, flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 0.3, marginRight:10}}> 
        <Image source={{uri: img}} style={{height: 70, width: '100%'}} />
      </View>
      <View style={{flex: 0.7}}>
        <Text
          onPress={() => handlePresss(title)}
          style={{color: 'black', fontSize: 18}}>
          {title}
        </Text>
        <Text style={{color: 'orange', fontSize: 12}}>{subTitle}</Text>
      </View>
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
          <Childview
            title={item.title}
            subTitle={item.subTitle}
            img={item.img}></Childview>
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
