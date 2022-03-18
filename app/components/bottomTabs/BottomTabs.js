/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../../screens/home/Home';
import Search from '../../screens/search/Search';
import { colors } from '../../theme/colors';
import Video from '../../screens/video/Video';
import Bag from '../../screens/bag/Bag';
import { TabIcon } from './style';
import icons from '../../theme/icons';
import Profile from '../../screens/profile/Profile';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    header: () => null,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        elevation: 0,
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
                            iconName = focused ? icons.homefill : icons.home;
                        } else if (route.name === 'Search') {
                            iconName = focused ? icons.searchfill : icons.search;
                        } else if (route.name === 'Video') {
                            iconName = focused ? icons.reelsfill : icons.reels;
                        } else if (route.name === 'Bag') {
                            iconName = focused ? icons.bagfill : icons.bag;
                        } else if (route.name === 'Profile') {
                            iconName = focused ? icons.user : icons.user;
                        }
                        return <TabIcon source={iconName} />;
                    },
                })
            }
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Video" component={Video} />
            <Tab.Screen name="Bag" component={Bag} />
            <Tab.Screen name="Profile" component={Profile} />





        </Tab.Navigator>
    );
}
