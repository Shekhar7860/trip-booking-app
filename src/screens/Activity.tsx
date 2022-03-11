import React, {FC} from "react";
import {View, Text, Image, SafeAreaView, TouchableOpacity} from "react-native"
import {ScaledSheet} from 'react-native-size-matters';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { images, COLORS, FONTS, SIZES } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';
import commonStyles from '../theme/commonStyles'
const Activity = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
          
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2 }}>Digital Trips</Text>
                    <Text style={{ color: COLORS.gray, marginTop: SIZES.padding, textAlign: 'center', ...FONTS.body3 }}>Easy solution to search or organise trips that increases business and overall productivity</Text>
                </View>

                <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={() => navigation.navigate('PlanTrips')}
                >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#46aeff', '#5884ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Plan A Trip</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 1, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                >
                <Text style={commonStyles.orTextStyle}>OR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 1, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={() => navigation.navigate('SearchTrips')}
                >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#46aeff', '#5884ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Search A Trip</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

}

const styles = ScaledSheet.create({
    container : {
        flex : 1,
        backgroundColor: COLORS.white,
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
    }
})

export default Activity;