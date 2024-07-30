// ForgotPasswordLink.tsx
import React from 'react';
import i18n from '../translations/i18n';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { THEMES } from '../styles/themes'; 

interface StillNotHaveAccountLinkProps {
  navigation: () => void;
}

const StillNotHaveAccountLink: React.FC<StillNotHaveAccountLinkProps> = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={navigation}>
      <Text style={styles.linkText}>
        {i18n.t('dontHaveAccount')}{i18n.t('dontHaveAccountLink')}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkText: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    color: THEMES.colors.blue[100]
  }
});

export default StillNotHaveAccountLink;