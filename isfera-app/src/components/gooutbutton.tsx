import React from 'react';
import { View, Text } from 'react-native'; // Import the Text component from react-native
import { TouchableOpacity, StyleSheet } from 'react-native';
import i18n from '../translations/i18n';
import { THEMES } from '../styles/themes'; 
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface GoOutButtonProps {
  navigation: () => void;
}

const GoOutButton: React.FC<GoOutButtonProps> = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.goOutButton} onPress={navigation}>
      <View style={styles.buttonContent}>
        <FontAwesome name="sign-out" size={24} color={THEMES.colors.white} />
        <Text style={styles.buttonText}>{i18n.t('btnLogout')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goOutButton: {
    backgroundColor: THEMES.colors.gray[300],
    borderRadius: 100,
    marginTop: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: '10%'
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

export default GoOutButton;