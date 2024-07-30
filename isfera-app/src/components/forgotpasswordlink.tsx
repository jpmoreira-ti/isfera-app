import React from 'react';
import i18n from '../translations/i18n';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { THEMES } from '../styles/themes'; 

interface ForgotPasswordLinkProps {
  navigation: () => void;
}

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={navigation}>
      <Text style={styles.linkText}>
        {i18n.t('forgotPasswordLink')}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkText: {
    marginTop: 20,
    color: THEMES.colors.black,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
});

export default ForgotPasswordLink;