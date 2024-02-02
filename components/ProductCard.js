import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useColorScheme } from 'nativewind';


export default function ProductCard({ image, category, title, price, description }) {
    const [coun, setCount] = React.useState(1);
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
                <Text>{description}</Text>
                <Text>{price}</Text>
            </View>
        </View>
    )
}