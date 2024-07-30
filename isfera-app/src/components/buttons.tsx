import { IButtonProps, Button } from "native-base"
import { StyleSheet } from 'react-native';

interface ButtonProps extends IButtonProps {
    children: React.ReactNode
}

export function Buttons({ children, ...rest }: ButtonProps) {
  return (
      <Button
          style={styles.button}
          {...rest}
      >
          {children}
      </Button>
  );
}

const styles = StyleSheet.create({
  button: {
      marginTop: 20,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%'
  },
});
