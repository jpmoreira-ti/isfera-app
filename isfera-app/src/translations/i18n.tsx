import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'
import { I18nManager } from 'react-native';
import en from './languages/en.json'
import pt from './languages/pt.json'

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

const i18n = new I18n()
i18n.translations = {
    en,
    pt,
  };

i18n.locale = getLocales()[0].languageCode
i18n.enableFallback = true

export default i18n;

