import HomeScreen from './home';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <>
      <HomeScreen />
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0D0D0D"
        translucent={true}
      />
    </>
  );
}
