import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity, Alert } from 'react-native'

import LogoIsfera from './assets/logoIsfera.jpeg'
import { Titles } from './components/titles'
import { InputText } from './components/inputText'
import { Buttons } from './components/buttons'
import i18n  from './translations/i18n'

export default function Login() {
  return (
    <VStack flex={1} p={10} alignItems={'center'} justifyContent={'center'}>
      <Image source={LogoIsfera} alt='Logo Isfera' />
      <Titles>
        {i18n.t('titleLogin')}
      </Titles>
      <Box>
        <InputText
          label={i18n.t('labelEmailText')}
          placeholder={i18n.t('inputEmailText')}
        />
        <InputText
          label={i18n.t('labelPasswordText')}
          placeholder={i18n.t('inputPasswordText')}
        />
      </Box>
      <Buttons>
      {i18n.t('btnLogin')}
      </Buttons>
      <Link
        href='https://cursoisfera.com.br'
        mt={3}
        alignSelf={'center'}
      >
        {i18n.t('forgotPasswordLink')} 
      </Link>
      <Box
        w={'full'}
        flexDir={'row'}
        justifyContent={'center'}
        mt={3}
      >
        <Text>
          {i18n.t('dontHaveAccount')} 
        </Text>
        <TouchableOpacity>
          <Text
            color={'blue.500'}
            fontWeight={'bold'}
            onPress={() => Alert.alert(i18n.t('buildingAlert'))}
          >{i18n.t('dontHaveAccountLink')}</Text>
        </TouchableOpacity>  
      </Box> 
    </VStack>
  );
}
