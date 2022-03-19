/* eslint-disable prettier/prettier */
import { Image, Text, View } from 'react-native';
import styled from 'styled-components';

export const HeaderContainer = styled(View)`
    padding: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Actions = styled(View)`
    width: 28%;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const HeaderText = styled(Text)`
    color: white;
`;

export const Logo = styled(Image)`
    width: 160px;
    height: 55px;
`;

export const UnreadBadge = styled(View)`
    background-color: ${(props) => props.theme.colors.darkRed};
    position: absolute;
    align-items: center;
    justify-content: center;
    z-index: 100;
    left: 18px;
    bottom: 16px;
    width: 25px;
    height: 18px;
    border-radius: 25px;
`;


export const UnreadBadgeText = styled(Text)`
    color: white;
    font-weight: 600;
`;
