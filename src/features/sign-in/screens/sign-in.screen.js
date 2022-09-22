import React from "react";
import {View } from "react-native";
import styled from 'styled-components/native'

import { SafeArea } from '../../../utils/safe-area.component'
import { SignInComponent } from '../../sign-in/components/sign-in.component'

const EkadashiDataContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const SignInScreen = () => (
  <SafeArea>
    <EkadashiDataContainer>
      <SignInComponent />
    </EkadashiDataContainer>
  </SafeArea>
);