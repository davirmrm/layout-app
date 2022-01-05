import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './homeStyle'

export default () => (
    <View style={styles.container}>
        <Text>HOME</Text>
        <Text>Open up App.js to start working on your app! kkkkk</Text>
        <StatusBar style="auto" />
    </View>
);