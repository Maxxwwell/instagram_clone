/* eslint-disable prettier/prettier */
import { ActivityIndicator, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const Scaffold = styled(View)`
    flex: 1;
    padding-left: 15px;
    padding-right: 15px;
    background-color: ${(props) => props.theme.colors.white};
`;

export const LogoContainer = styled(View)`
    align-items: center;
    margin-top: 40px;
`;

export const Logo = styled(Image)`

`;

export const ForgortPassword = styled(TouchableOpacity)`
    align-items: flex-end;
`;


export const ForgortPasswordText = styled(Text)`
    color: #4ea5d7;
    font-weight: 500;
    font-size: 15px;
`

export const LoginForm = styled(View)`
    margin-top: 60px;
    justify-content: center;
`;


export const TextField = styled(TextInput)`
    font-size: 15px;
    border-width: 2px;
    padding: 12px;
    border-color: ${(props) => props.theme.colors.grey};
    border-radius: 4px;
    margin-bottom: 10px;
    height: 45px;
`;

export const LoginButton = styled(Pressable)`
    margin-top: 25px;
    align-items: center;
    justify-content: center;
    min-height: 45px;
    /* background-color: #0086bd; */
    background-color: #0096F6;
    border-radius: 4px;
`;


export const NotValid = styled(Pressable)`
    margin-top: 25px;
    align-items: center;
    justify-content: center;
    min-height: 45px;
    background-color: #c2e5f2;
    border-radius: 4px;
`;


export const LoginText = styled(Text)`
    color: ${(props) => props.theme.colors.white};
    font-size: 18px;
    font-weight: bold;
`;

export const SignupContainer = styled(View)`
    margin-top: 50px;
    width: 100%;
    justify-content: center;
    flex-direction: row;
`;

export const AccountText = styled(Text)`
    font-weight: 600;
    font-size: 16px;
`;


export const Loading = styled(ActivityIndicator)`
flex: 1;
justify-content: center;
`;
