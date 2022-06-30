import React from 'react'
import tw from 'twrnc'
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_APIKEY} from '@env'
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';
import NavFavorites from '../components/NavFavourite';

const HomeScreen = () => {

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>

            <View style={tw`p-5`}>
                <Image 
                style= {{width:100, height:100, resizeMode: 'contain'}}
                source= {{uri: 'data:image/png;base64,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'}} 
                />

        <GooglePlacesAutocomplete
                placeholder="Pick Up"
                styles={{
                    container: {flex: 0},
                    textInput: {fontSize: 18}
                }}
                query={{
                key: 'AIzaSyDKE2-YIZ580MiR8vmWuqbOuzE4_gMyxpM',
                language: 'en', // language of the results
                }}
                fetchDetails= {true}
                onPress={
                    (data, details = null) =>  {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))
                        dispatch(setDestination(null))
                    }}
                enablePoweredByContainer={false}
                minLength={2}
                onFail={(error) => console.error(error)}
                debounce={400}
            />


            <NavOptions />
            <NavFavorites/>
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
