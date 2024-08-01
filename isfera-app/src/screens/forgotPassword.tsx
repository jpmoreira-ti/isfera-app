import { VStack, Image, Box } from 'native-base'

import LogoIsfera from '../assets/logoIsfera.jpeg'
import { Titles } from '../components/titles'
import { Inputs } from '../components/inputs'
import GoBackButton from '../components/gobackbutton'
import i18n  from '../translations/i18n'
import { useState } from 'react'
import UpdateButton from '../components/updatepasswordbutton'

export default function UpdatePassword( { navigation } ) {
  const [numSection, setNumSection] = useState(0)
  const section = [
    {
      id: 1,
      title: i18n.t('updatePasswordTitle'),
      inputText: [
        {
          id: 1,
          label: i18n.t('labelNewPasswordText'),
          placeholder: i18n.t('inputNewPasswordText'),
        },
        {
          id: 2,
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
      <UpdateButton navigation={() => navigation.navigate('Login')}/>
    </VStack>
  );
}
