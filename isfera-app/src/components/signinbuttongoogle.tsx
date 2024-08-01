import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'; // Added 'Text' import
import { Auth } from 'aws-amplify';
import i18n from '../translations/i18n';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';
import { FontAwesome6 } from '@expo/vector-icons';
import { THEMES } from '../styles/themes'; 

function SignInButtonGoogle() {
  const signInWithGoogle = () => {
    Auth.federatedSignIn({ provider: 'Google' as CognitoHostedUIIdentityProvider });
  };

  return (
    <TouchableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
      <View style={styles.buttonContent}>
        <FontAwesome6 name="google" size={24} color={THEMES.colors.white} />
        <Text style={styles.buttonText}>{i18n.t('signInGoogle')}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: THEMES.colors.blue[100],
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '7%'
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: THEMES.colors.white,
    marginLeft: 10,
    fontSize: THEMES.fontSizes.md,
  },
});

export default SignInButtonGoogle;