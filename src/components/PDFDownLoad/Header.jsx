import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../assets/images/Logo/event.png'
import headerImg from '../../assets/images/more/header.png'
import spscLogo from '../../assets/images/Logo/spscLogo.png'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 9,
  },
  titleColumn:{
    flexDirection: 'column',
    flexGrow: 2,
   alignItems: 'center',
  },
  header:{
    width: 300,
  },
  logo: {
    height: 80,
    margin: 10,
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
});

export default () => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Image src={spscLogo} style={styles.logo} />
      <View style={styles.titleColumn}>
        <Image src={headerImg} style={styles.header}/>
      </View>
      <Image src={logo} style={styles.logo} />
    </View>
  </View>
);
