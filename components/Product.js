import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addToCart, RemoveCart} from './redux/Action';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const cartItems = useSelector(state => state.reducer);
  const handleAddToCart = () => {
    // console.log(item)
    dispatch(addToCart(item));
  };
  const handleRemoveCart = () => {
    dispatch(RemoveCart(item.name));
  };
  useEffect(() => {
    let result = cartItems.filter(element => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
    // if(cartItems && cartItems.length){
    //   cartItems.forEach((element)=>{
    //       if(element.name === item.name){
    //           setIsAdded(true)
    //       }
    //   })
    // }
  }, [cartItems, item]);
  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        marginVertical: 2,
        backgroundColor: 'white',
      }}>
      <Image
        source={{uri: item.image}}
        style={{width: 400, height: 200, borderRadius: 20}}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 20, color: 'black'}}>{item.name}</Text>
        <Text style={{fontSize: 20, color: 'black', marginLeft: 130}}>
          $({item.price})
        </Text>
        <Text style={{fontSize: 15, color: 'red', marginTop: 5}}>
          {item.off} off
        </Text>
      </View>
      <Text style={{fontSize: 15, color: 'gray'}}>{item.color}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <TouchableOpacity
          style={{
            width: 120,
            height: 40,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
            marginRight: 40,
            opacity:0.8,
          }}>
          <Text style={{fontSize: 15, color: 'white'}}>Buy Now</Text>
        </TouchableOpacity>
        {isAdded ? (
          <TouchableOpacity
            onPress={() => handleRemoveCart(item)}
            style={{
              width: 120,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 40,
              borderWidth: 2,
              borderColor: 'red',
              opacity:0.8,
            }}>
            <Text style={{fontSize: 12, color: 'red', fontWeight: 'bold'}}>
              Remove From Cart
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => handleAddToCart(item)}
            style={{
              width: 120,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 40,
              borderWidth: 2,
              borderColor: 'red',
              opacity:0.8,
            }}>
            <Text style={{fontSize: 13, color: 'red', fontWeight: 'bold'}}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Product;

// const styles = StyleSheet.create({});
