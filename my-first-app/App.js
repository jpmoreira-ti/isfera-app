import Login from './src/login';
import { NativeBaseProvider, StatusBar } from 'native-base'
import { THEMES } from './src/styles/themes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[800]} />
      <Login />
    </NativeBaseProvider>
  );
}
