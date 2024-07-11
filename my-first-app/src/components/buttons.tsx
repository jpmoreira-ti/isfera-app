import { IButtonProps, Button } from "native-base"
import { Alert } from "react-native"

interface ButtonProps extends IButtonProps {
    children: React.ReactNode
}

export function Buttons({ children, ...rest }: ButtonProps){
    return (
      <Button
        w={'full'}
        bg={'green.100'}
        mt={10}
        borderRadius={'lg'}
        //isLoading
        {...rest}
        onPress={() => Alert.alert('Em construção, aguarde!')}
      >
        {children}
      </Button>
    )
}