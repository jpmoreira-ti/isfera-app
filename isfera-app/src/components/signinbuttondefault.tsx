import React from 'react';
import { View, Text } from 'react-native'; // Import the Text component from react-native
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';
import i18n from '../translations/i18n';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { THEMES } from '../styles/themes'; 

interface SignInButtonDefaultProps {
  navigation: () => void;
}

const SignInButtonDefault: React.FC<SignInButtonDefaultProps> = ({ navigation }) => {
  const signIn = () => {
    //Auth.federatedSignIn({ provider: 'Google' as CognitoHostedUIIdentityProvider });
  };

 
  return (
    <TouchableOpacity style={styles.signInButton} onPress={navigation}>
      <View style={styles.buttonContent}>
        <FontAwesome name="sign-in" size={24} color={THEMES.colors.white} />
          <Text style={styles.buttonText}>
            {i18n.t('btnLogin')}
          </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signInButton: {
    backgroundColor: THEMES.colors.orange[100],
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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

export default SignInButtonDefault;