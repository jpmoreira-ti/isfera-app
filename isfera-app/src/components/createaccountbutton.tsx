import React from 'react';
import i18n from '../translations/i18n';
import { View, Text } from 'react-native'; // Import the Text component from react-native
import { TouchableOpacity, StyleSheet } from 'react-native';
import { THEMES } from '../styles/themes';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface CreateAccountButtonProps {
  navigation: () => void;
}

const CreateAccountButton: React.FC<CreateAccountButtonProps> = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.createAccountButton} onPress={navigation}>
      <View style={styles.buttonContent}>
        <MaterialIcons name="create" size={24} color={THEMES.colors.white} />
        <Text style={styles.buttonText}>{i18n.t('btnCreateAccount')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  createAccountButton: {
    backgroundColor: THEMES.colors.green[100],
    borderRadius: 10,
    marginTop: 20,
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

export default CreateAccountButton;