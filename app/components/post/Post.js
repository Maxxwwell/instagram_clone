/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { CaptionText, CommentContainer, ImagePost, ImagePostContainer, LikesContainer, LikesText, ListTile, PostContainer, PostHeaderContainer, PostIcon, PostIconContainer, PostText, ProfilePicture, ProfileWidget, ViewComment } from './styles';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';
import { POSTFOOTERICONS } from '../postIcons/PostFooterIcons';
import { useState } from 'react';


export default function Post({ post }) {
  return (
    <PostContainer>
      {/* <Divider /> */}
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter />
      <Likes post={post} />
      <Caption post={post} />
      <CommentSection post={post} />
      <Comments post={post} />
    </PostContainer>

  );
}

const PostHeader = ({ post }) => (
  <PostHeaderContainer>
    <ProfileWidget>
      <ProfilePicture source={{ uri: post.profile_picture }} />
      <PostText>{post.user}</PostText>
    </ProfileWidget>
    <TouchableOpacity>
      <Icon name="ellipsis-horizontal-sharp" color={colors.white} size={25} />
    </TouchableOpacity>
  </PostHeaderContainer>
);

const PostImage = ({ post }) => (
  <ImagePostContainer>
    <ImagePost style={{ resizeMode: 'cover' }} source={{ uri: post.imageUrl }} />
  </ImagePostContainer>
);


const PostFooter = () => (
  <ListTile>
    <PostIconContainer>
      <TouchableOpacity>
        <PostIcon source={POSTFOOTERICONS[0].icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <PostIcon source={POSTFOOTERICONS[1].icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <PostIcon source={POSTFOOTERICONS[2].icon} />
      </TouchableOpacity>
    </PostIconContainer>
    <PostIconContainer>

      <TouchableOpacity>
        <PostIcon source={POSTFOOTERICONS[3].icon} />
      </TouchableOpacity>
    </PostIconContainer>

  </ListTile>
);

const Likes = ({ post }) => (
  <LikesContainer>
    <LikesText>{post.likes.toLocaleString('en')} likes</LikesText>
  </LikesContainer>
);

const Caption = ({ post }) => (
  <LikesContainer>
    <PostText>{post.user}</PostText>
    <CaptionText>{post.caption}</CaptionText>
  </LikesContainer>
);

const CommentSection = ({ post }) => (
  <CommentContainer>
    {/* the !! before the post is for if the condition is false */}
    {!!post.comments.length && (
      <ViewComment>
        View
        {post.comments.length > 1 ? ' all' : ''} {post.comments.length}
        {post.comments.length > 1 ? ' comments' : ' comment'}
      </ViewComment>
    )

    }
  </CommentContainer>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <CommentContainer key={index}>
        <PostText>{comment.user}</PostText>
        <CaptionText>{
          comment.comment.length > 40 ? comment.comment.slice(0, 38).toLowerCase() + '...'
            : comment.comment
        }
        </CaptionText>
      </CommentContainer>
    ))}
  </>
);
