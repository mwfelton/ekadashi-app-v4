import React, { useContext } from 'react';
import { View } from "react-native";
import styled from 'styled-components/native'

import { SafeArea } from '../../../utils/safe-area.component'
import { EkadashiMain } from '../components/ekadashi.component'
import { EkadashiContext } from '../../../services/ekadashi-data/ekadashi.context';

const EkadashiDataContainer = styled(View)`
  flex: 1;
  background-color: blue;
`;

export const EkadashiScreen = () => {
  const { isLoading, error, dates } = useContext(EkadashiContext);
  console.log(dates)
  return (
  <SafeArea>
    <EkadashiDataContainer>
      <EkadashiMain 
        data={dates}
      />
    </EkadashiDataContainer>
  </SafeArea>
  )
};