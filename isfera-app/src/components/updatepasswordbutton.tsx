import React from 'react';
import i18n from '../translations/i18n';
import { View } from 'native-base';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { THEMES } from '../styles/themes';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface UpdateButtonProps {
  navigation: () => void;
}

const UpdateButton: React.FC<UpdateButtonProps> = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.updateButton} onPress={navigation}>
      <View style={styles.buttonContent}>
        <MaterialCommunityIcons name="update" size={24} color={THEMES.colors.white} />
        <Text style={styles.buttonText}>{i18n.t('btnUpdatePassword')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  updateButton: {
    backgroundColor: THEMES.colors.green[100],
    borderRadius: 10,
    marginTop: 20,
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

export default UpdateButton;