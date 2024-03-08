import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from '../TelaInicial';
import Tela2 from '../Tela2';
import Tela3 from '../Tela3';
import Login from '../Login';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <Stack.Navigator initialRouteName="TelaInicial">
      <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ headerShown: false }} />
      <Stack.Screen name="Tela2" component={Tela2} options={{ headerShown: false }} />
      <Stack.Screen name="Tela3" component={Tela3} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
