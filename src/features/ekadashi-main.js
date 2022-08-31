import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import styled from 'styled-components/native'
import ekaData from '../../assets/ekadashi-data-2022.json'
const moment = require('moment');

let dateArray = []
ekaData.map(day => {dateArray.push(day.date)})
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
const ekaMoonPhase = ekaData[ekadashiIndex].moonPhase
const ekaType = ekaData[ekadashiIndex].type

export const EkadashiMain = () => {
  return (
  <View style={styles.container}>
    <Image style={styles.image} source={require('../../assets/moon.png')} />    
    <Text> The next Ekadashi is in {daysToGo} days</Text>
    <Text>{nearestDate}</Text>
    <Text>{ekaMoonPhase}</Text>
    <Text>{ekaType}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
  },
  image: {
    width: 100,
    height: 100,
  }
})