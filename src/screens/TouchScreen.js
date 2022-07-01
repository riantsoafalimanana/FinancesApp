import React from 'react';
import {View, StyleSheet} from "react-native";
import styled from 'styled-components';
import {Fontisto, MaterialIcons} from '@expo/vector-icons';
import Text from "../components/Text";

const TouchScreen = () => {
    return (
        <Container>
            <Text>
               Touch screen styled
            </Text>
        </Container>
    );
};

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
`;

export default TouchScreen;
