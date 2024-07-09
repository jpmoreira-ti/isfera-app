import { IButtonProps, Button } from "native-base"

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
        {...rest}
      >
        {children}
      </Button>
    )
}