import { faRectangleList as farRectangleList } from '@fortawesome/free-regular-svg-icons/faRectangleList';
import { faRectangleList as fasRectangleList } from '@fortawesome/free-solid-svg-icons/faRectangleList';
import {faClock as farClock} from '@fortawesome/free-regular-svg-icons/faClock';
import {faClock as fasClock} from '@fortawesome/free-solid-svg-icons/faClock';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { AcceptedOrdersView } from '../AcceptedOrders';
import { FinishedOrdersView } from '../FinishedOrders';
import { OpenOrdersView } from '../OpenOrders';

const Tab = createBottomTabNavigator();


export function OrdersView() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    let icon;
                    switch (route.name) {
                        case 'OpenOrders':
                            icon = focused ? fasRectangleList : farRectangleList;
                            break;
                        case 'AcceptedOrders':
                            icon = focused ? fasClock : farClock;
                            break;
                        case 'FinishedOrders':
                            icon = focused ? fasCircleCheck : farCircleCheck;
                            break;
                        default:
                            return null;
                    }
                    return <FontAwesomeIcon icon={icon} color={color} size={size} />;

                },
            })}>
            <Tab.Screen
                name="OpenOrders"
                component={OpenOrdersView}
                options={{
                    title: 'Available',
                }}
            />
            <Tab.Screen
                name="AcceptedOrders"
                component={AcceptedOrdersView}
                options={{
                    title: 'Currently Open',
                    tabBarBadge:
                        acceptedOrders.length > 0 ? acceptedOrders.length : undefined,
                }}
            />
            <Tab.Screen
                name="FinishedOrders"
                component={FinishedOrdersView}
                options={{
                    title: 'Finished',
                }}
            />
        </Tab.Navigator>
    );
} 