import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BinMapScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text 
                onPress={() => navigation.navigate('Home')}
                style={styles.text}
            >
                Bin Screen
            </Text>
        </View>
    );
}

// Edit style stuff here
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
    },
});

