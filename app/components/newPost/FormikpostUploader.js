/* eslint-disable prettier/prettier */
import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Container, ErrorText, ShareButton, ShareText, UploadImage } from './styles';
import { Divider } from 'react-native-elements';
import { colors } from '../../theme/colors';

const PLACEHOLDER_IMG = 'https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg';

const uploadPostScheme = yup.object().shape({
    imageUrl: yup.string().url().required('A URL is required'),
    caption: yup.string().max(2200, 'Caption has reached the character limit.'),
});

export default function FormikpostUploader({ navigation }) {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState();

    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => {
                console.log(values);
                console.log('Your post was submitted');
                navigation.goBack();
            }}

            validationSchema={uploadPostScheme}
        // validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                <>
                    <Container>
                        <UploadImage source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG }} />

                        <TextInput placeholder="Write a caption"
                            style={{ color: 'white', fontSize: 20, marginHorizontal: 10, flex: 1 }}
                            placeholderTextColor="gray"
                            multiline={true}
                            onChangeText={handleChange('caption')}
                            onBlur={handleBlur('caption')}
                            value={values.caption}
                        />

                    </Container>
                    {/* <Divider width={0.6} color={colors.white} orientation='vertical' /> */}
                    <TextInput
                        style={{ color: 'white', fontSize: 17 }}
                        placeholder="Enter Image Url"
                        placeholderTextColor="gray"
                        onChange={(event) => setThumbnailUrl(event.nativeEvent.text)}
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {
                        errors.imageUrl && (
                            <ErrorText>{errors.imageUrl}</ErrorText>
                        )
                    }

                    {/* <Button
                        onPress={handleSubmit}
                        disabled={!isValid}
                        title="Share"
                    /> */}
                    <ShareButton onPress={handleSubmit} disabled={!isValid} >
                        {
                            isValid ?
                                <ShareText style={{ color: '#0e80ff' }}>Share</ShareText>
                                :
                                <ShareText style={{ color: 'gray' }}>Share</ShareText>
                        }
                    </ShareButton>

                </>
            )}
        </Formik>
    );
}
