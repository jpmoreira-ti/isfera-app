import React from 'react';
import { VStack, Image, Text, Box } from 'native-base';

import LogoIsfera from '../assets/logoIsfera.jpeg';
import { Titles } from '../components/titles';
import { Inputs } from '../components/inputs';
import i18n from '../translations/i18n';
import SignInButtonGoogle from '../components/signinbuttongoogle';
import SignInButtonDefault from '../components/signinbuttondefault';
import ForgotPasswordLink from '../components/forgotpasswordlink';
import StillNotHaveAccountLink from '../components/stillnothaveaccountlink';
import { THEMES } from '../styles/themes';

export default function Login({ navigation }) {
  return (
    <VStack flex={1} p={10} alignItems={'center'} justifyContent={'center'} bgColor={THEMES.colors.white}>
      <Image source={LogoIsfera} alt='Logo Isfera' />
      <Titles>
        {i18n.t('titleLogin')}
      </Titles>
      <Box>
        <Inputs
          label={i18n.t('labelEmailText')}
          placeholder={i18n.t('inputEmailText')}
        />
        <Inputs
          label={i18n.t('labelPasswordText')}
          placeholder={i18n.t('inputPasswordText')}
        />
      </Box>
      <SignInButtonDefault navigation={() => navigation.navigate('Tabs')} />
      <SignInButtonGoogle/>
      <ForgotPasswordLink navigation={() => navigation.navigate('UpdatePassword')} />
      <StillNotHaveAccountLink navigation={() => navigation.navigate('CreateAccount')} />
    </VStack>
  );
}