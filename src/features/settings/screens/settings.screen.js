import React from "react";
import {View } from "react-native";
import styled from 'styled-components/native'

import { SafeArea } from '../../../utils/safe-area.component'
import { SettingsComponent } from '../../settings/components/settings.component'

const EkadashiDataContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const SettingsScreen = () => (
  <SafeArea>
    <EkadashiDataContainer>
      <SettingsComponent />
    </EkadashiDataContainer>
  </SafeArea>
);