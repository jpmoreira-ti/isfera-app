import React from 'react';
import { View, Text } from 'react-native'; // Import the Text component from react-native
import { TouchableOpacity, StyleSheet } from 'react-native';
import i18n from '../translations/i18n';
import { THEMES } from '../styles/themes'; 
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface GoBackButtonProps {
  navigation: () => void;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.goBackButton} onPress={navigation}>
      <View style={styles.buttonContent}>
        <FontAwesome name="sign-out" size={24} color={THEMES.colors.white} />
        <Text style={styles.buttonText}>{i18n.t('btnGoBack')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goBackButton: {
    backgroundColor: THEMES.colors.gray[300],
    borderRadius: 10,
    marginTop: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '6%',
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

export default GoBackButton;