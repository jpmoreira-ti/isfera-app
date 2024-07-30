// src/components/SignOutButton.js
import React from 'react';
import { Button, Text } from 'native-base';
import { Auth } from 'aws-amplify';
import i18n from '../translations/i18n';

const SignOutButton = () => {
  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <Button onPress={signOut}>
        {i18n.t('signInGoogle')}
    </Button>
  );
};

export default SignOutButton;