/* eslint-disable prettier/prettier */
import { Image, Text, View } from 'react-native';
import styled from 'styled-components';

export const HeaderContainer = styled(View)`
    padding: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

export const Actions = styled(View)`
    flex-direction: row;
`;

export const HeaderText = styled(Text)`
    color: white;
`;

export const Logo = styled(Image)`
    width: 160px;
    height: 55px;
`;
