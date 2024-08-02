import { View ,Image} from "react-native"

const HomeScreen = ()=>{
    useEffect(() => {
        SplashScreen.hide();
      }, []);
    return(
        <View>
            <Image source={require('../assets/images/SplashScreen.png')} >
            </Image>
        </View>
    )
}
export default HomeScreen;