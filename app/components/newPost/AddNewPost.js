/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { HeaderItems, NewPostContainer, TitleText } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';
import FormikpostUploader from './FormikpostUploader';

export default function AddNewPost({ navigation }) {
    return (
        <NewPostContainer>
            <HeaderItems>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='arrow-back' size={24} color={colors.white} />
                </TouchableOpacity>
                <TitleText>New Post</TitleText>
                <TitleText />
            </HeaderItems>

            <FormikpostUploader />

        </NewPostContainer>
    );
}
