import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './src/views/IndexScreen/Index';
import TrainingDetail from './src/views/TrainingDetailScreen/TrainingDetail';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerTitle: "FitTrack"}}>
                <Stack.Screen name='Index' component={Index} />
                <Stack.Screen name='TrainingDetail' component={TrainingDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}