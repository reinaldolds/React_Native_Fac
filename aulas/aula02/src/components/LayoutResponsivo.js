import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LayoutResponsivo = () => {
  return (
    <View style={styles.container} >
        <View style={styles.header}>
            <Text>Cabeçalho</Text>
        </View>
        <View style={styles.content}>
            <Text>Conteúdo principal</Text>
        </View>
        <View style={styles.footer}>
            <Text>Roda pé</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {flex: 1},
    header: {flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center'},
    content: {flex: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' },
    footer: {flex: 1, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center'},

})

export default LayoutResponsivo