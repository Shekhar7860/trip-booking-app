import React, {FC, useState} from "react";
import {View, Text, Image, SafeAreaView, TouchableOpacity} from "react-native"
import {ScaledSheet} from 'react-native-size-matters';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { images, COLORS, FONTS, SIZES } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';
import commonStyles from '../theme/commonStyles'
import Input from "../components/Input";
import colors from "../theme/colors";
import DatePicker from 'react-native-datepicker';
const PlanTrips = ({navigation}) => {
    const [date, setDate] = useState('09-10-2021');
    const onChange = (param, val) => {
        console.log(param, val)

    }
    return (
        <SafeAreaView style={styles.container}>
          <Input style={styles.textInputStyle} placeholder='Title' onChangeText={(val) => { onChange(val, 'title')}} keyBoardType={'default'}/>
          <Input style={styles.textInputStyle} placeholder='Starting Place' onChangeText={(val) => { onChange(val, 'starting_place')}} keyBoardType={'default'}/>
          <Input style={styles.textInputStyle} placeholder='Ending Place' onChangeText={(val) => { onChange(val, 'ending_place')}} keyBoardType={'default'}/>
          <Input style={styles.textInputStyleDescription} placeholder='Description' onChangeText={(val) => { onChange(val, 'description')}} keyBoardType={'default'}/>
          <Input style={styles.textInputStyle} placeholder='Number Of Days' onChangeText={(val) => { onChange(val, 'duration')}} keyBoardType={'number-pad'}/>
          <DatePicker
          date={date}
          style={styles.textInputStyle}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2000"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
          
        />
        </SafeAreaView>
    );

}

const styles = ScaledSheet.create({
    container : {
        flex : 1,
        backgroundColor: COLORS.white,
    },
    datePickerStyle: {
        width: 230,
      },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textViewStyle : {
     justifyContent : 'center',
    },
    textInputStyle : {
        borderWidth : 1,
        width : '90%',
        alignSelf : 'center',
        height : '30@s',
        marginTop : '20@s',
        borderColor : colors.borderColor,
        padding : '5@s'
       },
       textInputStyleDescription : {
        borderWidth : 1,
        width : '90%',
        alignSelf : 'center',
        height : '60@s',
        marginTop : '20@s',
        borderColor : colors.borderColor,
        padding : '5@s'
       }
})

export default PlanTrips;