import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {ScaledSheet} from 'react-native-size-matters';
import colors from "./colors";
import { images, COLORS, FONTS, SIZES } from '../constants';
export default commonStyles = ScaledSheet.create({
    ImageContainer: {
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 20
    },
    textStyle : {
        fontSize : '25@s',
        fontWeight : '500',
        color : Colors.black,
        textAlign : 'center',
        marginTop : 20
    },
    smallTextStyle : {
        fontSize : '15@s',
        fontWeight : '300',
        color : Colors.black,
        textAlign : 'center',
        marginTop : 20
    },
    smallTextStyle2 : {
        fontSize : '10@s',
        fontWeight : '300',
        color : Colors.black,
        textAlign : 'center',
        marginTop : 20
    },
    topSpace : {
        margin : '5@s',
     marginTop : '10@s'
    },
    themeTextStyle : {
        fontSize : '15@s',
        fontWeight : 'bold',
        color : colors.textColor,
        textAlign : 'center',
        marginTop : 20
    },
    blackTextStyle : {
        fontSize : '14@s',
        fontWeight : 'bold',
        color : colors.black,
        textAlign : 'center',
        marginTop : '10@s'
    },
    emptyWidth : {
        width : '5%'
    },
    emptyWidth2 : {
        width : '50%'
    },
    buttonContainer : {
        height : 50,
        width : '80%',
        alignSelf : 'center',
        marginTop : 50,
        backgroundColor : Colors.black,
        justifyContent : 'center'
    },
    buttonContainer2 : {
        height : 50,
        width : '80%',
        alignSelf : 'center',
        marginTop : '20@s',
        backgroundColor : colors.textColor,
        justifyContent : 'center'
    },
    textColor : {
        color : Colors.white,
        textAlign : 'center'
    },
    icon : {
        height : 25,
        width : 25
    },
    iconLarge : {
        height : 80,
        width : 80
    },
    iconLarge2 : {
        height : 120,
        width : 120
    },
    containerWidth : {
        width : '20%',
        justifyContent : 'space-between'
    },
    viewWidth : {
        width : '40%',
        justifyContent : 'space-between'
    },
    textCenter : {
        textAlign : 'center'
    },
    alignCenter : {
        justifyContent : 'center'
    },
    orangeTextStyle : {
        fontSize : '15@s',
        fontWeight : 'bold',
        color : colors.themeOrange,
        textAlign : 'center',
        marginTop : 20
    },
    orTextStyle : {
  fontFamily : "Roboto-Regular",
  fontSize : '15@s'
    }
})