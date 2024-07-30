import { NativeBaseProvider, StatusBar } from 'native-base'
import { THEMES } from './src/styles/themes';
import Routes from './src/routes';
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";

Amplify.configure(amplifyconfig);

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[800]} />
      <Routes/>
    </NativeBaseProvider>
  );
}
