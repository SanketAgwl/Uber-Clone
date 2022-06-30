import React from 'react'
import { StyleSheet, Text, Touchable, View, TouchableOpacity, Image } from 'react-native'
import { FlatList } from 'react-native'
import tw from 'twrnc'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {selectOrigin} from '../slices/navSlice'

const data = [
    {
    id: 1,
    title: "Get A Ride",
    screen: 'MapScreen',
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1569012661/assets/19/dea9bc-88d6-461e-a233-17ed4d8cdc09/original/Taxi.png'
    },
    {
        id: 2,
        title: "Order Food",
        screen: 'EatsScreen',
        image: 'https://st2.depositphotos.com/4177785/44560/v/380/depositphotos_445609356-stock-illustration-breakfast-cereal-vector-flat-color.jpg?forcejpeg=true'
    }
]

const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor= {(item) => item.id}
            renderItem={({item})=> ( 
                <TouchableOpacity style={tw`p-2  m-5`} onPress={()=> navigation.navigate(item.screen)} disabled={!origin}>
                <View style={tw `${!origin && "opacity-20"}`}>
                <Image 
                    style= { {width:120, height:120, resizeMode: 'contain' }}
                    source = {{uri: item.image}}
                />
                <Text style={tw`font-semibold text-lg mt-2 `}>{item.title}</Text>
                <Icon 
                style= {tw`p-2 bg-black rounded-full w-10 m-4`}
                type='antdesign' color='white' name='arrowright' />
                </View>
                </TouchableOpacity>
            )}
        />
        // <Text></Text>
    )
}

export default NavOptions

const styles = StyleSheet.create({})
