import React from 'react';
import { Text, View, Image} from 'react-native';
import styled from 'styled-components/native'
import ekaData from '../../../../assets/ekadashi-data-2022.json'
const moment = require('moment');

const Title = styled(Text)`
  font-size: 40px;
`;

const Paragraph = styled(Text)`
  font-size: 30px;
`;

const MainGraphic = styled(Image)`
  width: 100;
  height: 100;
`;

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


export const EkadashiToday = () => {
  return (
  <Container>
    <Title> Today is EKADASHI!!!</Title>
  </Container>
  );
};
