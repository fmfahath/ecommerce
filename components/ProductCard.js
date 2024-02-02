import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'nativewind';


export default function ProductCard({ image, category, title, price, description }) {
    const [coun, setCount] = React.useState(1);
    const { colorScheme } = useColorScheme();

    return (
        <View>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{price}</Text>
        </View>
    )
}