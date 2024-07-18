import { IButtonProps, Button } from "native-base"

interface ButtonProps extends IButtonProps {
    children: React.ReactNode
}

export function Buttons({ children, ...rest }: ButtonProps){
    return (
      <Button
        w={'100%'}
        bg={'green.100'}
        mt={5}
        borderRadius={'lg'}
        {...rest}
      >
        {children}
      </Button>
    )
}