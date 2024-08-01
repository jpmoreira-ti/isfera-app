import { VStack, Image, Box } from 'native-base'

import LogoIsfera from '../assets/logoIsfera.jpeg'
import { Titles } from '../components/titles'
import { Inputs } from '../components/inputs'
import i18n  from '../translations/i18n'
import { useState } from 'react'
import GoBackButton from '../components/gobackbutton'
import CreateAccountButton from '../components/createaccountbutton'

export default function CreateAccount( { navigation } ) {
  const [numSection, setNumSection] = useState(0)
  const section = [
    {
      id: 1,
      title: i18n.t('titleCreateAccount'),
      inputText: [
        {
          id: 1,
          label: i18n.t('labelNameText'),
          placeholder: i18n.t('inputNameText'),
        },
        {
          id: 2,
          label: i18n.t('labelEmailText'),
          placeholder: i18n.t('inputEmailText'),
        },
        {
          id: 3,
          label: i18n.t('labelNewPasswordText'),
          placeholder: i18n.t('inputNewPasswordText'),
        },
        {
          id: 4,
          label: i18n.t('labelConfirmPassword'),
          placeholder: i18n.t('inputConfirmNewPasswordText'),
        }
      ]
    }
  ]

  function NextSection() {
    if (numSection < section.length - 1){
      setNumSection(numSection + 1)
    }
  }

  return (
    <VStack flex={1} p={10} alignItems={'center'} justifyContent={'center'} bgColor={'white'}>
      <Image source={LogoIsfera} alt='Logo Isfera' />
      <Titles>
        {section[numSection].title}
      </Titles>
      <Box>
       {
        section[numSection].inputText.map(inputData => {
          return <Inputs label={inputData.label}
                 placeholder={inputData.placeholder} key={inputData.id}/>
        })
       }
      </Box>
      <GoBackButton navigation={() => navigation.navigate('Login')}/>
      <CreateAccountButton navigation={() => navigation.navigate('Login')}/>  
    </VStack>
  );
}
