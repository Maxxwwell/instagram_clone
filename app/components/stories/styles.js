/* eslint-disable prettier/prettier */
import { Image, Text, View } from 'react-native';
import styled from 'styled-components';

export const StoriesContainer = styled(View)`

`;

export const UsernameText = styled(Text)`
    color: ${(props) => props.theme.colors.white};
    text-transform: capitalize;
`;

export const StoryWidget = styled(View)`
    align-items: center;
`;

export const StoryImages = styled(Image)`
    width: 75px;
    height: 75px;
    border-radius: 50px;
    margin-left: 8px;
    border-width: 2.5px;
    border-color: ${(props) => props.theme.colors.lightOrange};
`;
