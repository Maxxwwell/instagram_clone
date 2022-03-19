/* eslint-disable prettier/prettier */
import { Image, Text, View } from 'react-native';
import styled from 'styled-components';

export const PostContainer = styled(View)`
    margin-top: 20px;
`;

export const PostText = styled(Text)`
    color: ${(props) => props.theme.colors.white};
    margin-left: 5px;
    font-weight: 700;
`;


export const ProfileWidget = styled(View)`
    flex-direction: row;
    align-items: center;
`;

export const PostHeaderContainer = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    margin: 5px;
    align-items: center;
`;

export const ProfilePicture = styled(Image)`
    width: 35px;
    height: 35px;
    border-radius: 50px;
    margin-left: 5px;
    border-width: 1.5px;
    border-color: ${(props) => props.theme.colors.lightOrange};
`;


export const ImagePostContainer = styled(View)`
    width: 100%;
    height: 450px;
`;


export const ImagePost = styled(Image)`
    height: 100%;
`;


export const ListTile = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    padding-left: 5px;
    padding-right: 5px;

`;


export const PostIconContainer = styled(View)`
    flex-direction: row;
`;


export const PostIcon = styled(Image)`
    height: 28px;
    width: 28px;
    margin-top: 10px;
    margin-left: 2px;
`;


export const LikesContainer = styled(View)`
    flex-direction: row;
     margin-top: 5px;
     align-items: center;
`;

export const LikesText = styled(Text)`
    color: ${(props) => props.theme.colors.white};
    margin-left: 10px;
    font-weight: 500;
`;


export const CaptionText = styled(LikesText)`
    margin-left: 10px;
    font-size: 16px;
    font-weight: 400;
`;
