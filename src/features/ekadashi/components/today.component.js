import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native'

const Title = styled(Text)`
  font-size: 40px;
`;

const Paragraph = styled(Text)`
  font-size: 30px;
`;

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 40px;
  width : 50px;
  background-color: blue;
`;


export const EkadashiToday = () => {
  return (
  <Container>
    <Title> Today is EKADASHI!!!</Title>
  </Container>
  );
};
