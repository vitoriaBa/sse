import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from '../TelaInicial';
import Login from '../Login';

const Stack = createNativeStackNavigator();

export default function Rotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Telainicial" component={TelaInicial}  options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}