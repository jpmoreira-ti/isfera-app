import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Classes from "./classes";
import Profile from "./profile";
import Exams from "./exams";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import i18n  from '../translations/i18n'
import { THEMES } from '../styles/themes'

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    tabBarStyle: {
        backgroundColor: THEMES.colors.orange[100],
        borderTopWidth: 0,
        elevation: 5,
        height: 75,
        paddingBottom: 20
    },
    tabBarActiveTintColor: THEMES.colors.blue[100],
    tabBarInactiveTintColor: THEMES.colors.white,
    tabBarLabelStyle: {
        fontSize: 13
    },
    tabBarIconStyle: {
        marginTop: 10
    }
};

const tabs = [
    {
        name: "Home",
        component: Home,
        icon: "home",
        title: i18n.t('titleBottonBarHome')
    },
    {
        name: "Classes",
        component: Classes,
        icon: "chalkboard-teacher",
        title: i18n.t('titleBottonBarClasses')
    },
    {
        name: "Exams",
        component: Exams,
        icon: "pencil-ruler",
        title: i18n.t('titleBottonBarExams')
    },
    {
        name: "Profile",
        component: Profile,
        icon: "user-alt",
        title: i18n.t('titleBottonBarProfile')
    }
]

export default function Tabs() {
    return(
        <Tab.Navigator screenOptions={tabBarOptions}>
            {tabs.map((tab) => (
                <Tab.Screen key={tab.name} name={tab.name} component={tab.component} options={
                    {
                        headerShown: false,
                        tabBarIcon: ( { size, color }) => (
                            <FontAwesome5 name={tab.icon} size={size} color={color} />
                        ),
                        title: tab.title
                    }
                }/>
            ))}
         </Tab.Navigator>
    )
}
