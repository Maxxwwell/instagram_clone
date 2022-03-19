/* eslint-disable prettier/prettier */
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Scaffold } from './style';
import AppBar from '../../components/appBar/AppBar';
import Stories from '../../components/stories/Stories';
import Post from '../../components/post/Post';
import { POSTS } from '../../data/posts';

export default function Home() {
  return (
    <Scaffold>
      <AppBar />
      <Stories />
      <ScrollView>
        {
          POSTS.map((post, index) => (
            <Post post={post} key={index} />
          ))
        }

      </ScrollView>
    </Scaffold>
  );
}
