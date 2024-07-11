import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity, Alert } from 'react-native'

import LogoIsfera from './assets/logoIsfera.jpeg'
import { Titles } from './components/titles'
import { InputText } from './components/inputText'
import { Buttons } from './components/buttons'

export default function Login() {
  return (
    <VStack flex={1} p={10} alignItems={'center'} justifyContent={'center'}>
      <Image source={LogoIsfera} alt='Logo Isfera' />
      <Titles>
        Faça login em sua conta
      </Titles>
      <Box>
        <InputText
          label="E-mail:"
          placeholder="Insira seu endereço de e-mail"
        />
        <InputText
          label="Senha:"
          placeholder="Insira sua senha"
        />
      </Box>
      <Buttons>
        Entrar
      </Buttons>
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
            fontWeight={'bold'}
            onPress={() => Alert.alert('Em construção, aguarde!')}
          >Clique Aqui!</Text>
        </TouchableOpacity>  
      </Box> 
    </VStack>
  );
}
