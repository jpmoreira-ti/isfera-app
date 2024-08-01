import { VStack, Text, ScrollView, Avatar, Divider } from "native-base"
import { THEMES } from "../styles/themes"
import { Titles } from "../components/titles"
import i18n from "../translations/i18n"

export default function Home() {
    return(
        <ScrollView flex={1} bgColor={THEMES.colors.white}>
            <VStack p={10} alignItems={'center'} justifyContent={'center'}>
                <Titles>{i18n.t('titleMenuScreenHome')}</Titles>
                <Divider m={5}></Divider>
                <Text fontSize={THEMES.fontSizes["2xl"]}></Text>
                <Text fontSize={THEMES.fontSizes["2xl"]}></Text>
                <Text fontSize={THEMES.fontSizes["2xl"]}></Text>
                <Text fontSize={THEMES.fontSizes["2xl"]}></Text>
                <Divider m={5}></Divider>
            </VStack>
        </ScrollView>
    ) 
}