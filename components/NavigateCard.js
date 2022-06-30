import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity} from 'react-native'
import { Icon } from "react-native-elements";
import React from 'react'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_APIKEY} from '@env'
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {selectDestination} from '../slices/navSlice'
import NavFavorites from './NavFavourite';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const destination = useSelector(selectDestination);
    const navigation = useNavigation();
  return (
      <SafeAreaView style={tw `bg-white flex-1` }>
            <Text style={tw `text-center py-5 text-xl`}>Good Morning </Text>
        <View style={tw `border-t border-gray-200 flex-shrink`}>
        <View>

        <GooglePlacesAutocomplete
                placeholder="Enter Destination"
                query={{
                key: 'AIzaSyDKE2-YIZ580MiR8vmWuqbOuzE4_gMyxpM',
                language: 'en', // language of the results
                }}
                styles= {toInputBoxStyles}
                fetchDetails= {true}
                onPress={
                    (data, details = null) =>  {
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description
                        }))
                        console.log(destination);
                        navigation.navigate("RideOptionsCard");
                    }}
                enablePoweredByContainer={false}
                minLength={2}
                returnKeyType={"search"}
                onFail={(error) => console.error(error)}
                debounce={400}
            />
        </View>
            <NavFavorites/>
        </View>

        <View
                style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("RideOptionsCard")}
                    style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
                >
                    <Icon name="car" type="font-awesome" color="white" size={16} />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
                >
                    <Icon
                        name="fast-food-outline"
                        type="ionicon"
                        color="black"
                        size={16}
                    />
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>

      </SafeAreaView>
    
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },

    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },

    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});