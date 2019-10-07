import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.headerWrapper}>
      <Text>Result: {props.result}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Header
