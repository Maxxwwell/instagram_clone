/* eslint-disable prettier/prettier */
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { AccountText, ForgortPassword, ForgortPasswordText, LoginButton, LoginForm, LoginText, Logo, LogoContainer, NotValid, Scaffold, SignupContainer, TextField } from './styles';
import icons from '../../../theme/icons';
import * as yup from 'yup';
import { Formik } from 'formik';
import Validator from 'email-validator';
import { colors } from '../../../theme/colors';

export default function Login({ navigation }) {

  const LoginFormSchema = yup.object().shape({
    email: yup.string().email().required('An email is required'),
    password: yup.string().required().min(6, 'Password must be at least 6 characters'),
  });

  return (
    <Scaffold>
      <StatusBar backgroundColor="black" />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={LoginFormSchema}
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
                placeholder="Phone number, username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
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

              <ForgortPassword>
                <ForgortPasswordText>Forgot password?</ForgortPasswordText>
              </ForgortPassword>

            </LoginForm>

            {
              isValid ?
                <LoginButton onPress={handleSubmit} disabled={!isValid}>
                  <LoginText>Log In</LoginText>
                </LoginButton>
                :
                <NotValid>
                  <LoginText>Log In</LoginText>
                </NotValid>
            }


            <SignupContainer>
              <AccountText>Don't have an account?</AccountText>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
                <ForgortPasswordText> Sign Up</ForgortPasswordText>
              </TouchableOpacity>
            </SignupContainer>
          </>
        )}

      </Formik>
    </Scaffold >
  );
}
