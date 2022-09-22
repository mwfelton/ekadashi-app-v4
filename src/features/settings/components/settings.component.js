import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native'

const Title = styled(Text)`
  font-size: 40px;
`;

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SettingsComponent = () => {
  return (
  <Container>
    <Title> Settings Page</Title>
  </Container>
  );
};
