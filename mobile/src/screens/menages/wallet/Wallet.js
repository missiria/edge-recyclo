import { View,StyleSheet } from 'react-native'
import React from 'react'
import FooterNav from '../navigations/FooterNav';
import TabBarWallet from '../../../routes/TabBarWallet'

export default function Wallet({navigation}) {
    return (
        <View style={styles.container}>
            <TabBarWallet />
            <FooterNav navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:'white'
    }
})