import { ITextProps, Text } from "native-base"

interface TitlesProps extends ITextProps {
    children: React.ReactNode
}

export function Titles({ children, ...rest }: TitlesProps){
    return (
        <Text 
            fontSize={'2xl'}
            fontWeight={'bold'}
            color={'orange.100'}
            alignSelf={'center'}
            mt={5}
            {...rest}
        >
            {children}
        </Text>
    )
}