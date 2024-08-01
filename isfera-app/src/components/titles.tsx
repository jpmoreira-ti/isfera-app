import { ITextProps, Text } from "native-base"
import { THEMES } from "../styles/themes"

interface TitlesProps extends ITextProps {
    children: React.ReactNode
}

export function Titles({ children, ...rest }: TitlesProps){
    return (
        <Text 
            fontSize={THEMES.fontSizes["3xl"]}
            fontWeight={'bold'}
            color={THEMES.colors.orange[100]}
            alignSelf={'center'}
            mt={5}
            {...rest}
        >
            {children}
        </Text>
    )
}