import { Link } from "native-base"
import i18n from "../translations/i18n"
import { Linking } from "react-native"

export function ForgetPasswordLink() {
    return (
      <Link
        href={'https://cursoisfera.com.br'}
        mt={3}
        alignSelf={'center'}
        onPress={() => Linking.openURL('https://cursoisfera.com.br')}
      >
         {i18n.t('forgotPasswordLink')}
      </Link>
    )
}
