import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import bg from '../../assets/img/bg-newyork-mobile.jpg';
import logo from '../../assets/img/Logo-NewYork.png';
import { CustomButton } from "../../components/CustomButton";
import { CustomText } from "../../components/CustomText";

export function HomeView() {
    return (
        <ImageBackground source={bg} style={styles.background}>
            <SafeAreaView style={styles.view}>
                <Image source={logo} />
                <CustomText bold style={styles.title}>Take the next best meal directly to your home.</CustomText>
                <CustomButton variant="success" size="lg">
                    Login
                    </CustomButton>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    view: {
        justifyContent: "space-between",
        alignItems: 'center',
        paddingVertical: 16,
        flex: 1,
    },
    title: {
        fontSize: 36,
        textAlign: 'center',
        color: '#FFF',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
});
