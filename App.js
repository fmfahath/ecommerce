import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className='flex-1 items-center justify-center bg-gray-200 dark:bg-black' >
      <View className='flex-row w-full gap-3 items-center'>
        <Text className='dark:text-white text-xl font-bold'>New Collection</Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme}></Switch>
      </View>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </View>
  );
}


