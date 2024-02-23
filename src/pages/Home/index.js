import { View , Text } from "react-native";
import { SafeAreaView } from "react-native-web";
import style from "./styles";
import Pub_image from "../../components/Pub_Image";

export default function Home({
    navigation    
}){
    
    function loadCity(city){
        navigation.navigate('Details', {city : city});
    }
    return (
        <SafeAreaView style={style.container}>
            <View>
                <Pub_image
                    file_way={require(`../../../assets/kiev.jpg`)}
                    city = "Kiev"
                    navigation={navigation}
                    onPress={function(){
                        loadCity('kiev');
                    }}
                />
            </View>
        </SafeAreaView>
    );
    
}