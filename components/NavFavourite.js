import React from 'react';
import { TouchableOpacity, FlatList, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'twrnc'
import {setDestination} from '../slices/navSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {selectDestination} from '../slices/navSlice'

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'Gandhi Nagar, Agra',
        coordinate: {lat: 27.2046, lng: 77.4977}
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        destination: 'London Eye, London, UK',
        coordinate: {"lat": 27.2046, "lng": 77.4977}
    },
]

const NavFavorites = () => {
    const dispatch = useDispatch();
    const destination = useSelector(selectDestination);
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            itemSeparatorComponent={() => {
                <View
                    style={[tw`bg-gray-200`, { height: 0.5 }]}
                />
            }}
            renderItem={({ item: { location, destination, icon, coordinate } }) =>
                <TouchableOpacity style={tw`flex-row items-center p-5`} 
                onpress={() => console.log("ok")
                }>
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type='ionicon'
                        color='white'
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            }
        />
    )
}

export default NavFavorites;
