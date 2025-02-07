import { VStack, Image, Text, Box } from 'native-base'
import { Alert, TouchableOpacity } from 'react-native'

import LogoIsfera from '../assets/logoIsfera.jpeg'
import { Titles } from '../components/titles'
import { Inputs } from '../components/inputs'
import { Buttons } from '../components/buttons'
import i18n  from '../translations/i18n'

export default function Login( { navigation } ) {
  return (
    <VStack flex={1} p={10} alignItems={'center'} justifyContent={'center'} bgColor={'white'}>
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
      <Buttons onPress={() => Alert.alert(i18n.t('msgLoginSuccessfully'))}>
        {i18n.t('btnLogin')}
      </Buttons>
      <TouchableOpacity onPress={() => navigation.navigate('UpdatePassword')}>
          <Text
            mt={3}
            color={'gray.300'}
            fontWeight={'bold'}
          >{i18n.t('forgotPasswordLink')}</Text>
        </TouchableOpacity>
      <Box
        w={'full'}
        flexDir={'row'}
        justifyContent={'center'}
        mt={3}
      >
        <Text>
          {i18n.t('dontHaveAccount')} 
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text
            color={'blue.500'}
            fontWeight={'bold'}
          >{i18n.t('dontHaveAccountLink')}</Text>
        </TouchableOpacity>  
      </Box> 
    </VStack>
  );
}
