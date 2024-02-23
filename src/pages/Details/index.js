import { View , Text } from "react-native";
import { SafeAreaView } from "react-native-web";
import style from "./styles";
import Pub_image from "../../components/Pub_Image";

export default function Details({
    navigation , route    
}){
    city = route.params;
    console.log(city);
    return (
        <SafeAreaView style={style.container}>
            <View>
                <Text>Ola mndo</Text>
            </View>
        </SafeAreaView>
    );
    
}