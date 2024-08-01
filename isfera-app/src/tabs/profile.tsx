import { VStack, Text, ScrollView, Avatar, Divider } from "native-base"
import { Titles } from "../components/titles"
import { THEMES } from "../styles/themes"
import i18n from '../translations/i18n'
import GoOutButton from "../components/gooutbutton"

export default function Profile( { navigation } ) {
    return(
        <ScrollView flex={1} bgColor={THEMES.colors.white}>
            <VStack p={10} alignItems={'center'} justifyContent={'center'}>
                <Titles>{i18n.t('titleMenuScreenProfile')}</Titles>
                <Avatar size={THEMES.fontSizes["20xl"]} source={require('../assets/profile.jpg')} />
                <Divider m={5}></Divider>
                <Text fontSize={THEMES.fontSizes["2xl"]}>Nome: João da Silva</Text>
                <Text fontSize={THEMES.fontSizes["2xl"]}>Email: teste@gmail.com</Text>
                <GoOutButton navigation={() => navigation.navigate('Login')} />
            </VStack>
        </ScrollView>
    )
}