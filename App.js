//import liraries
import React from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, View } from 'react-native';

const myData = [
  {
    id:1,
    title: 'Bangladesh',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    id:2,
    title: 'India',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    id:3,
    title: 'Pakistan',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    id:4,
    title: 'America',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    id:5,
    title: 'Frech',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    id:6,
    title: 'Italy',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    id:7,
    title: 'Portugal',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    id:8,
    title: 'Canada',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    id:9,
    title: 'Oman',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    id:10,
    title: 'England',
    subTitle: 'This is a country name, nation name',
    img: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/18814/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',
  },
  {
    id:11,
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
    <View
      style={{
        backgroundColor: 'purple',
        width: 170,
        padding: 10,
        margin: 5,
        flexDirection: 'column',
      }}>
      <View style={{marginRight: 10}}>
        <Image source={{uri: img}} style={{height: 100, width: '100%'}} />
      </View>
      <View>
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
        numColumns={2}
        horizontal={false}
        data={myData}
        renderItem={({item}) => (
          <Childview
            title={item.title}
            subTitle={item.subTitle}
            img={item.img}></Childview>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // height: 180
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'white',
  },
});

//make this component available to the app
export default App;
