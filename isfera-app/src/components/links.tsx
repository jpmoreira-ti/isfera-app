import { Link } from "native-base"
import i18n from "../translations/i18n"
import { Linking } from "react-native"

export function ForgetPasswordLink() {
    return (
      <Link
        href={i18n.t('isferaWebSite')}
        mt={3}
        alignSelf={'center'}
        onPress={() => Linking.openURL(i18n.t('isferaWebSite'))}
      >
         {i18n.t('forgotPasswordLink')}
      </Link>
    )
}
