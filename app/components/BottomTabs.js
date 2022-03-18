/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home/Home';
import Search from '../screens/search/Search';
import { colors } from '../theme/colors';
import Video from '../screens/video/Video';
import Bag from '../screens/bag/Bag';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    header: () => null,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        elevation: 5,
                        height: 60,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        borderTopColor: 'black',
                        backgroundColor: 'black',
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home-sharp' : 'home-outline';
                        } else if (route.name === 'Search') {
                            iconName = focused ? 'search' : 'search-outline';
                        } else if (route.name === 'Video') {
                            iconName = focused ? 'videocam' : 'videocam-outline';
                        } else if (route.name === 'Bag') {
                            iconName = focused ? 'basket' : 'basket-outline';
                        }
                        return <Icon name={iconName} size={28} color={colors.white} />;
                    },
                })
            }
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Video" component={Video} />
            <Tab.Screen name="Bag" component={Bag} />




        </Tab.Navigator>
    );
}
