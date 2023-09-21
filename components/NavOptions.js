import { Icon } from '@rneui/themed';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';



const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen", // Change in the future...
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={tw` p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 h-60`}
                disabled={!origin}
                
                >
                
                    <View style={tw`${!origin && "opacity-20"}`}>
                        <Image
                            style={{
                                width: 120,
                                height: 120,
                                resizeMode: 'contain',
                            }}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`} >{item.title}</Text>
                        <Icon
                        name=''
                        color='white'
                        type='antdesign'
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

export default NavOptions;
