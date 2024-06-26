import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import TestChart from '../components/pie-chart';
import HeaderLogo from '../components/headerLogo'; // Import the HeaderLogo component
import ThemeContext from '../context/ThemeContext';



export default function GuestHomeScreen({ navigation }) {

    const { theme, toggleTheme } = useContext(ThemeContext);

    // Get screen dimensions
    const { width } = Dimensions.get('window');

    const baseFontSize = width > 600 ? 24 : 16; // Example breakpoint at 600

    const Square = () => {
        return <View style={styles.square} />;
    };
    const Square1 = () => {
        return <View style={styles.square1} />;
    };
    const Square2 = () => {
        return <View style={styles.square2} />;
    };

    // Edit style stuff here
    const styles = StyleSheet.create({
        safeArea: {
            flex: 1,
            backgroundColor: theme === 'dark' ? '#042222' : '#C4D8BF',
        },
        container: {
            flex: 1,
            backgroundColor: theme === 'dark' ? '#042222' : '#C4D8BF',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: 5,
            width: '85%',
        },
        chartContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10, // Add vertical margin to adjust spacing
            paddingBottom: 20,
            width: '85%',
            alignSelf: 'center',
        },


        welcome_text: {
            fontSize: 50,
            fontFamily: 'Nunito-Regular',
            color: theme === 'dark' ? '#F8F8F8' : '#2D5A3D',
            textAlign: 'center', // Center the text
            marginBottom: 20, // Add margin to separate from the chart
        },

        name: {
            color:  theme === 'dark' ? '#00DF82' : '#68A77C',
            fontFamily: 'Nunito-Regular',
        },

        squares_container: {
            paddingTop: 50,
            flexDirection: 'row', // Arrange squares horizontally
            alignItems: 'center', // Align squares vertically centered
        },

        square: {
            width: 50,
            height: 50,
            backgroundColor: '#2D5A3D',
            marginHorizontal: 5, // Add horizontal margin between squares
        },
        square1: {
            width: 50,
            height: 50,
            backgroundColor: '#99DAB3',
            marginHorizontal: 5, // Add horizontal margin between squares
        },
        square2: {
            width: 50,
            height: 50,
            backgroundColor: '#FFFFFF',
            marginHorizontal: 5, // Add horizontal margin between squares
        },
        category: {
            color: theme === 'dark' ? '#F8F8F8' : '#2D5A3D',
            marginHorizontal: 5, // Add horizontal margin between text and squares
            fontSize: 10,
            fontFamily: 'Nunito-Regular',
            textAlign: 'center', // Center the text
        },

        summary_container: {
            paddingTop: 75,
            paddingBottom: 40,
            alignItems: 'center',
            width: '90%', // Ensure the container takes the full width
            justifyContent: 'center',
        },
        summary_text: {
            fontSize: 15,
            fontFamily: 'Nunito-Regular',
            color: theme === 'dark' ? '#F8F8F8' : '#2D5A3D',
            textAlign: 'center',
        },
        summary_word: {
            color: theme === 'dark' ? '#F8F8F8' : '#2D5A3D',
            fontFamily: 'Nunito-Regular',
        },
        name: {
            color: theme === 'dark' ? '#00DF82' : '#68A77C',
            fontFamily: 'Nunito-Regular',
        },
    });


    return (
        <SafeAreaView style={styles.safeArea}>
            <HeaderLogo />
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Text style={styles.welcome_text}>
                        Sign in to unlock features.
                    </Text>


                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

