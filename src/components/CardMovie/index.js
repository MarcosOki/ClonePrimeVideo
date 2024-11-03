import { Image, StyleSheet, TouchableOpacity, View } from "react-native"


export function CardMovie(props){
    return(
        <View>
            <TouchableOpacity>
                <Image source={props.url} style={{width:200, height:100}}/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
})