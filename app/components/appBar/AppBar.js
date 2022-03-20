/* eslint-disable prettier/prettier */
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { Actions, HeaderContainer, HeaderText, Logo, UnreadBadge, UnreadBadgeText } from './styles';
import icons from '../../theme/icons';
import { TabIcon } from '../bottomTabs/style';

export default function AppBar({ navigation }) {
    return (
        <HeaderContainer>
            <StatusBar backgroundColor="black" />
            <TouchableOpacity>
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
