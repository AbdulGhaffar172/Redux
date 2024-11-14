import { StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Product from './components/Product';

const App = () => {
  const products = [
    {
      name:'Audi',
      price:'30000',
      color:'Price includes VAT丨Extra 2% off with coins',
      image:'https://i.insider.com/592f4169b74af41b008b5977?width=1300&format=jpeg&auto=webp',
      off:'87%',
    },
    {
      name:'Ferrari',
      price:'130000',
      color:'Price includes VAT丨Extra 2% off with coins',
      off:'87%',
      image:'https://cdn.pixabay.com/photo/2023/09/06/17/48/ai-generated-8237688_1280.png',
    },
    {
      name:'Toyota',
      price:'20000',
      color:'Price includes VAT丨Extra 2% off with coins',
      off:'87%',
      image:'https://images.tusiassets.com/community/images/633958166710745616/8452095ddd2d7dd27037a35db4fc2cdd.png!mfit_w2048_h2048_jpg',
    },
  ];
  return (
    <View>
      <Header/>
      <ScrollView style={styles.scroll}>
        {
          products.map((item, index)=>
          <Product key={index} item={item}/>
          )
        }
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  scroll:{
    marginBottom:50,
  },
});