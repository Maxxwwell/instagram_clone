/* eslint-disable prettier/prettier */
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const NewPostContainer = styled(View)`
    padding-top: 10px;
`;

export const HeaderItems = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TitleText = styled(Text)`
    color: ${(props) => props.theme.colors.white};
    /* margin-left: 5px; */
    font-weight: 700;
    font-size: 22px;
`;

export const Container = styled(View)`
    padding-top: 10px;
    /* align-items */
    flex-direction: row;
    align-items: flex-start;
`;

export const UploadImage = styled(Image)`
    width: 100px;
    height: 100px;
`;

export const ErrorText = styled(Text)`
    color: red;
    font-size: 14px;
`;


export const ShareText = styled(Text)`
    /* color: red; */
    font-size: 18px;
`;


export const ShareButton = styled(TouchableOpacity)`
    align-items: center;
`;
