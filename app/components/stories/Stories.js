/* eslint-disable prettier/prettier */
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { StoriesContainer, StoryImages, StoryWidget, UsernameText } from './styles';
import { USERS } from '../../data/users';

export default function Stories() {
    return (
        <StoriesContainer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    USERS.map((story, index) => (
                        <StoryWidget key={index}>
                            <StoryImages source={{ uri: story.image }} />
                            <UsernameText>
                                {
                                    story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...'
                                        : story.user
                                }
                            </UsernameText>
                        </StoryWidget>

                    ))
                }
            </ScrollView>
        </StoriesContainer>
    );
}
