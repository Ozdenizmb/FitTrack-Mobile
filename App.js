import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from './src/views/IndexScreen/Index';
import Profile from './src/views/ProfileScreen/Profile';
import TrainingDetail from './src/views/TrainingDetailScreen/TrainingDetail';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Favorite from './src/views/FavoriteScreen/Favorite';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function IndexStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="IndexScreen" component={Index} options={{ headerShown: false }} />
            <Stack.Screen name="TrainingDetailScreen" component={TrainingDetail} />
        </Stack.Navigator>
    );
}

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

function FavoriteStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FavoriteScreen" component={Favorite} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                if(route.name === 'Discover') {
                    return <AntDesign name="search1" size={size} color={color} />
                }
                else if(route.name === 'Favorite') {
                    return <AntDesign name="hearto" size={size} color={color} />
                }
                else if(route.name === 'Profile') {
                    return <FontAwesome5 name="user" size={size} color={color} />;
                }
            },
            tabBarActiveTintColor: '#1885d8',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: { fontSize: 14 },
        })}>
                <Tab.Screen name="Discover" component={IndexStack} options={{ headerShown: false }} />
                <Tab.Screen name="Favorite" component={FavoriteStack} />
                <Tab.Screen name="Profile" component={ProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}