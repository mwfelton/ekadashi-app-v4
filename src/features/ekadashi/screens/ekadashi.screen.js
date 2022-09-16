import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import styled from 'styled-components/native'

import { EkadashiMain } from '../components/ekadashi.component'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const EkadashiDataContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const EkadashiScreen = () => (
  <SafeArea>
    <EkadashiDataContainer>
      <EkadashiMain />
    </EkadashiDataContainer>
  </SafeArea>
);