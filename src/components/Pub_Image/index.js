import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "./styles";



export default function Pub_image({
    file_way,
    city,
    onPress
}) {

    

    return (
        <View>
            <Image
                source={file_way}
                style={styles.image}
            />
            <TouchableOpacity
                onPress={onPress}>
                <Text>{city} , Clique aqui para saber mais</Text>
            </TouchableOpacity>
        </View>
    );
}
