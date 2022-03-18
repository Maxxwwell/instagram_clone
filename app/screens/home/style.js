/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import styled from 'styled-components';

export const Scaffold = styled(View)`
    flex: 1;
    background-color: ${(props) => props.theme.colors.black};
`;
