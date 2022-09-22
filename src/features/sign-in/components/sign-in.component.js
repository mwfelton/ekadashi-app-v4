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

export const SignInComponent = () => {
  return (
  <Container>
    <Title> Sign In / Sign Up</Title>
    <Title> This feature is coming soon! You'll be able to track your fasts and your daily Yoga practices</Title>
  </Container>
  );
};

