import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Routes } from './src/routes';
import Toast from 'react-native-toast-message';
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/store/store';
import { Text } from 'react-native';

export default function App() {
    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Routes />
                <Toast />
            </NavigationContainer>
        </ReduxProvider>
    );
}
