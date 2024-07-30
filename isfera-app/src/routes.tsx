import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Login from "./screens/login"
import CreateAccount from "./screens/createAccount"
import UpdatePassword from "./screens/forgotPassword"
import Tabs from "./tabs"

const Tab = createNativeStackNavigator()

export default function Routes(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Login" component={Login} options={
                        {
                            headerShown: false
                        }
                    }
                />
                <Tab.Screen
                    name="CreateAccount" component={CreateAccount} options={
                        {
                            headerShown: false
                        }
                    }
                />
                <Tab.Screen
                    name="UpdatePassword" component={UpdatePassword} options={
                        {
                            headerShown: false
                        }
                    }
                />
                 <Tab.Screen
                    name="Tabs" component={Tabs} options={
                        {
                            headerShown: false
                        }
                    }
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
} 