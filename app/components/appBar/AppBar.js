/* eslint-disable prettier/prettier */
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { Actions, HeaderContainer, HeaderText, Logo, UnreadBadge, UnreadBadgeText } from './styles';
import icons from '../../theme/icons';
import { TabIcon } from '../bottomTabs/style';
import { auth, SIGNOUT } from '../../../firebase';



export default function AppBar({ navigation }) {


    const handleSignOut = async () => {
        try {
            await SIGNOUT();
            console.log('signed out');
            // navigation.reset({
            //     index: 0,
            //     routes: [{ name: 'Login' }],
            // });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <HeaderContainer>
            <StatusBar backgroundColor="black" />
            <TouchableOpacity onPress={handleSignOut}>
                <Logo source={require('../../../assets/images/instagram-logo-png.png')} />
            </TouchableOpacity>

            <Actions>
                <TouchableOpacity onPress={() => navigation.navigate('AddPost')}>
                    <TabIcon source={icons.add} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('LikedPost')} >
                    <TabIcon source={icons.love} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Messages')} >
                    <UnreadBadge>
                        <UnreadBadgeText>11</UnreadBadgeText>
                    </UnreadBadge>
                    <TabIcon source={icons.messenger} />
                </TouchableOpacity>
            </Actions>
        </HeaderContainer>
    );
}
