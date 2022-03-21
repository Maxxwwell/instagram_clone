/* eslint-disable prettier/prettier */
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { AccountText, ForgortPassword, ForgortPasswordText, LoginButton, LoginForm, LoginText, Logo, LogoContainer, NotValid, Scaffold, SignupContainer, TextField } from '../login/styles';
import * as yup from 'yup';
import { Formik } from 'formik';
import Validator from 'email-validator';
import { colors } from '../../../theme/colors';
import icons from '../../../theme/icons';


export default function Signup({ navigation }) {

  const SignupFormSchema = yup.object().shape({
    email: yup.string().email().required('An email is required'),
    username: yup.string().required(2, 'A username is required'),
    password: yup.string().required().min(6, 'Password must be at least 6 characters'),

  });

  return (
    <Scaffold>
      <StatusBar backgroundColor="black" />
      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={SignupFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (

          <>
            <LogoContainer>
              <Logo source={icons.logo} />
            </LogoContainer>

            <LoginForm>
              <TextField
                style={{
                  borderColor: values.email.length < 1 || Validator.validate(values.email) ? colors.grey : 'red',
                }}
                placeholderTextColor="#444"
                placeholder="email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              <TextField
                style={{
                  borderColor: values.username.length === 0 ? colors.grey : null || values.username.length < 3 ? 'red' : colors.grey,
                }}
                placeholderTextColor="#444"
                placeholder="username"
                autoCapitalize="none"
                keyboardType="default"
                textContentType="username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />

              <TextField
                style={{
                  borderColor: values.password.length === 0 ? colors.grey : null || values.password.length < 6
                  ? 'red' : colors.grey,
                }}
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />

            </LoginForm>

            {
              isValid ?
                <LoginButton onPress={handleSubmit} disabled={!isValid}>
                  <LoginText>Log In</LoginText>
                </LoginButton>
                :
                <NotValid>
                  <LoginText>Sign Up</LoginText>
                </NotValid>
            }


            <SignupContainer>
              <AccountText>Already got an account?</AccountText>
              <TouchableOpacity onPress={() => navigation.goBack()} >
                <ForgortPasswordText> Log In</ForgortPasswordText>
              </TouchableOpacity>
            </SignupContainer>
          </>
        )}

      </Formik>
    </Scaffold>
  );
}
