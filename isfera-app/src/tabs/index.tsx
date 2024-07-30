import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Classes from "./classes";
import Logout from "./logout";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import i18n  from '../translations/i18n'

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={
                {
                    headerShown: false,
                    tabBarIcon: () => (
                        <FontAwesome5 name="home" size={24} color="black" />
                    ),
                    title: i18n.t('titleBottonBarHome')
                }
            }/>
            <Tab.Screen name="Classes" component={Classes} options={
                {
                    headerShown: false,
                    tabBarIcon: () => (
                        <FontAwesome5 name="chalkboard-teacher" size={24} color="black" />
                    ),
                    title: i18n.t('titleBottonBarClasses')
                }
            }/>
            <Tab.Screen name="Logout" component={Logout} options={
                {
                    headerShown: false,
                    tabBarIcon: () => (
                        <SimpleLineIcons name="logout" size={24} color="black" />
                    ),
                    title: i18n.t('titleBottonBarLogout')
                }
            }/>
        </Tab.Navigator>
    )
}
