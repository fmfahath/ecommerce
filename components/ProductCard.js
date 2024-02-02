import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useColorScheme } from 'nativewind';
import { AntDesign } from '@expo/vector-icons';


export default function ProductCard({ image, category, title, price, description }) {
    const [count, setCount] = React.useState(1);
    const { colorScheme } = useColorScheme();

    return (
        <View className='w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5'>
            <View className='w-full bg-white rounded-xl'>
                <Image
                    source={{ uri: image }}
                    className='w-full h-72'
                    style={{ resizeMode: 'contain' }}
                />
            </View>
            <View className='mt-5'>
                <Text className='text-sm text-black/60 dark:text-white/70'>{category}</Text>
                <Text className='text-lg font-semibold dark:text-white'>{title}</Text>
                <View className='flex-row justify-between mt-1 mb-1'>
                    <View className='flex-row items-center gap-3'>
                        <AntDesign
                            name='minuscircleo'
                            size={24}
                            color={colorScheme === 'light' ? 'black' : 'white'}
                            onPress={() => setCount(count - 1)}
                        />
                        <Text className='text-xl dark:text-white'>{count}</Text>
                        <AntDesign
                            name='pluscircleo'
                            size={24}
                            color={colorScheme === 'light' ? 'black' : 'white'}
                            onPress={() => setCount(count + 1)}
                        />

                    </View>
                    <Text className='text-2xl font-extrabold dark:text-white'>${price * count}</Text>
                </View>

                <Text className='text-sm text-black/60 dark:text-white/70 mt-2' numberOfLines={3}>{description}</Text>
            </View>
        </View>
    )
}