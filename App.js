import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import ProductList from './components/ProductList';
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-gray-200 dark:bg-black'>
      <View  >
        <View className='flex-row w-full gap-3 items-center'>
          <Text className='dark:text-white text-xl font-bold'>Mode</Text>
          <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme}></Switch>
        </View>
        <ProductList />
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </View>
    </SafeAreaView>

  );
}


