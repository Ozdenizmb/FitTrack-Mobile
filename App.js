import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from './src/views/IndexScreen/Index';
import Profile from './src/views/ProfileScreen/Profile';
import TrainingDetail from './src/views/TrainingDetailScreen/TrainingDetail';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import CreateTraining from './src/views/CreateTrainingScreen/CreateTraining';
import ProfileRedirection from './src/views/ProfileRedirectionScreen/ProfileRedirection';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import { Provider } from 'react-redux';
import ConfigureStore from './src/redux/ConfigureStore';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor  } = ConfigureStore();

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
            <Stack.Screen name="ProfileRedirectionScreen" component={ProfileRedirection} options={{ headerShown: false }} />
            <Stack.Screen name="ProfileScreen" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="SignUpScreen" component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

function CreateStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FavoriteScreen" component={CreateTraining} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        if(route.name === 'Discover') {
                            return <AntDesign name="search1" size={size} color={color} />
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
                        <Tab.Screen name="Create" component={CreateStack} options={{
                            tabBarIcon: ({focused}) => {
                                return(
                                    <View style={styles.plusIcon}>
                                        <AntDesign name="plus" size={24} color="white" />
                                    </View>
                                )
                            },
                            headerShown: false
                        }} />
                        <Tab.Screen name="Profile" component={ProfileStack} />
                    </Tab.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    plusIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1885d8',
        height: 60,
        width: 60,
        top: -20,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white'
    }
})