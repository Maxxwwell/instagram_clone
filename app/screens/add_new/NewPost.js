/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { Scaffold } from '../home/style';
import AddNewPost from '../../components/newPost/AddNewPost';

export default function NewPost({ navigation }) {
    return (
        <Scaffold>
            <AddNewPost navigation={navigation} />
        </Scaffold>
    );
}
