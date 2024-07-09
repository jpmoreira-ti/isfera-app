import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';

import Logo from './assets/logo.jpeg'

export default function Login() {
  return (
    <VStack flex={1} p={10} alignItems={'center'} justifyContent={'center'}>
      <Image source={Logo} alt='Logo Voll' />
      <Text 
        fontSize={'2xl'}
        fontWeight={'bold'}
        color={'orange.100'}
        alignSelf={'center'}
        mt={5}
      >
        Faça login em sua conta  
      </Text>
      <Box>
        <FormControl
          mt={3}
        >
          <FormControl.Label>E-mail:</FormControl.Label>
          <Input
            placeholder='Insira seu endereço de e-mail'
            size={'lg'}
            w={'full'}
            borderRadius={'lg'}
            bgColor={'gray.100'}
          >
          </Input>
        </FormControl>
        <FormControl
          mt={3}
        >
          <FormControl.Label>Senha:</FormControl.Label>
          <Input
            placeholder='Insira sua senha'
            size={'lg'}
            w={'full'}
            borderRadius={'lg'}
            bgColor={'gray.100'}
          >
          </Input>
        </FormControl>
      </Box>
      <Button
          w={'full'}
          bg={'green.100'}
          mt={10}
          borderRadius={'lg'}
        >
          Entrar
        </Button>
        <Link
          href='https://cursoisfera.com.br'
          mt={3}
          alignSelf={'center'}
        >
          Esqueceu sua senha?
        </Link>
        <Box
          w={'full'}
          flexDir={'row'}
          justifyContent={'center'}
          mt={3}
        >
          <Text>
           Ainda não tem cadastro? </Text>
          <TouchableOpacity>
            <Text
              color={'blue.500'}
            >Clique Aqui!</Text>
          </TouchableOpacity>  
        </Box> 
    </VStack>
  );
}
