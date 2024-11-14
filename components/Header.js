import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const Header = () => {

    const cartData = useSelector((state) => state.reducer);
    const [count, setCount] = useState(0);

    useEffect(() =>{
        // console.log(cartData); 
        setCount(cartData.length)
    },[cartData])
  return (
    <View style={{backgroundColor:'red', height:60, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
      <Image source={require('../Assist/home.png')} style={{width:30, height:30, tintColor:'white'}}/>
      <Text style={{fontSize:30, color:'white'}}>Redux</Text>
      <TouchableOpacity activeOpacity={0.6}>
      <View style={{position:'absolute', left:29, bottom:20,}}>
      <Text style={{fontSize:20, color:'white', }}>{count}</Text>
      </View>
      <Image source={require('../Assist/shopping-cart.png')} style={{width:30, height:30, tintColor:'white'}}/>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})