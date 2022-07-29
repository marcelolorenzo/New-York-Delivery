import { faRectangleList as farRectangleList } from '@fortawesome/free-regular-svg-icons/faRectangleList';
import { faRectangleList as fasRectangleList } from '@fortawesome/free-solid-svg-icons/faRectangleList';
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons/faClock';
import { faClock as fasClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { faCircleCheck as farCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck';
import { faCircleCheck as fasCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import { AcceptedOrdersView } from '../AcceptedOrders';
import { FinishedOrdersView } from '../FinishedOrders';
import { OpenOrdersView } from '../OpenOrders';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/userSlice';
import { loadOrders, selectAcceptedOrders } from '../../store/slices/ordersSlice';
import { useAppDispatch } from '../../store/store';

const Tab = createBottomTabNavigator();

export function OrdersView() {
    const acceptedOrders = useSelector(selectAcceptedOrders);
    const user = useSelector(selectUser);
    const userId = user?.id || '';
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadOrders(userId));
    }, [userId, dispatch]);
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
                tabBarActiveTintColor: '#1117A3',
                tabBarInactiveTintColor: '#333333',
                tabBarInactiveBackgroundColor: '#EEEEEE',
                tabBarActiveBackgroundColor: '#EEEEEE', 
                tabBarLabelStyle: {
                    fontFamily: 'Lato-Regular',
                    fontSize: 12,
                  },
                  tabBarBadgeStyle: {
                    backgroundColor: '#FF3B30',
                    fontSize: 14,
                    fontFamily: 'Lato-Regular',
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