import React from 'react';
import { Text, View, Image} from 'react-native';
import styled from 'styled-components/native'
import ekaData from '../../../../assets/ekadashi-data-2022.json'
import { EkadashiToday } from '../components/today.component'
import background from "../../../../assets/moon-bg.jpeg";

const moment = require('moment');

const Container = styled(View)`
  flex: 1;
  align-items: center;
  padding-top:30%;
  background-image: url(${background});
  padding:20px;
`;

const Title = styled(Text)`
  font-size: 40px;
  text-align: center;
  color:white;
`;

const Paragraph = styled(Text)`
  font-size: 30px;
  padding: 20px 0 20px 0;
  color:white;
`;

const MainGraphic = styled(Image)`
  width: 100;
  height: 100;
`;

// let dateArray = []
// ekaData.map(day => {dateArray.push(day.date)})
// const currentTime = new Date()
// let nearestDate;
// dateArray.forEach(date => {
//     let diff = moment(date).diff(moment(currentTime), 'days');
//     if (diff > 0) {
//         if (nearestDate) {
//             if (moment(date).diff(moment(nearestDate), 'days') < 0) {
//                 nearestDate = date;
//             }
//         } else {
//             nearestDate = date
//         }
//     }
// })

// const countDownFunction = (ekadashiDay) => {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
//     const currentTime = new Date().toDateString()
//     let today = new Date(currentTime);
//     let ekadashi = new Date(ekadashiDay);
//     let diff = ekadashi.getTime() - today.getTime();
//     return Math.floor(diff / day)
// }

// const daysToGo = countDownFunction(nearestDate)
// const ekadashiIndex = dateArray.indexOf(nearestDate)
// const ekaMoonPhase = ekaData[ekadashiIndex].moonPhase
// const ekaType = ekaData[ekadashiIndex].type

// const todayToString = currentTime.toDateString()
// let todayBoolean = false
// if (todayToString == nearestDate) {
//   todayBoolean = true
// } 

export const EkadashiMain = ({data}) => {

    let dateArray = []
    data.map(day => {dateArray.push(day.date)})
    const currentTime = new Date()
    let nearestDate;

    dateArray.forEach(date => {
        let diff = moment(date).diff(moment(currentTime), 'days');
        if (diff > 0) {
            if (nearestDate) {
                if (moment(date).diff(moment(nearestDate), 'days') < 0) {
                    nearestDate = date;
                }
            } else {
                nearestDate = date
            }
        }
    })
    
    const countDownFunction = (ekadashiDay) => {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const currentTime = new Date().toDateString()
        let today = new Date(currentTime);
        let ekadashi = new Date(ekadashiDay);
        let diff = ekadashi.getTime() - today.getTime();
        return Math.floor(diff / day)
    }
    
    const daysToGo = countDownFunction(nearestDate)
    const ekadashiIndex = dateArray.indexOf(nearestDate)
    console.log(ekadashiIndex)
    // const ekaMoonPhase = data[ekadashiIndex].moonPhase
    // console.log(ekaMoonPhase)
    // const ekaType = data[ekadashiIndex].type
    const todayToString = currentTime.toDateString()
    let todayBoolean = false
    if (todayToString == nearestDate) {
      todayBoolean = true
    } 

  return (
  <Container>
    <MainGraphic source={require('../../../../assets/moon.png')} />    
    <Title> Ekadashi is in</Title>
    <Title> {daysToGo} days</Title>
    <Paragraph>{nearestDate}</Paragraph>
    {/* <Paragraph>{ekaMoonPhase} moon phase</Paragraph> */}
    {/* <Paragraph>{ekaType}</Paragraph> */}
    { todayBoolean ? <EkadashiToday /> : null }
  </Container>
  );
};
