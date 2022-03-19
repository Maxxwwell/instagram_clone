/* eslint-disable prettier/prettier */
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { Actions, HeaderContainer, HeaderText, Logo, UnreadBadge, UnreadBadgeText } from './styles';
import icons from '../../theme/icons';
import { TabIcon } from '../bottomTabs/style';

export default function AppBar() {
    return (
        <HeaderContainer>
            <StatusBar backgroundColor="black" />
            <TouchableOpacity>
                <Logo source={require('../../../assets/images/instagram-logo-png.png')} />
            </TouchableOpacity>

            <Actions>
                <TouchableOpacity>
                    <TabIcon source={icons.add} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <TabIcon source={icons.love} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <UnreadBadge>
                        <UnreadBadgeText>11</UnreadBadgeText>
                    </UnreadBadge>
                    <TabIcon source={icons.messenger} />
                </TouchableOpacity>
            </Actions>
        </HeaderContainer>
    );
}
