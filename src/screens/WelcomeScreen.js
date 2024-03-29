import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export function WelcomeScreen(props) {
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      ring1Padding.value = withSpring(ring1Padding.value + hp(3));
    }, 100);

    setTimeout(() => {
      ring2Padding.value = withSpring(ring2Padding.value + hp(4));
    }, 300);

    setTimeout(()=> navigation.navigate('Home'), 2500)
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />

      <Animated.View
        className="bg-white/20 rounded-full"
        style={{padding: ring2Padding}}>
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{padding: ring1Padding}}>
          <Image
            source={require('../../assets/images/welcome.png')}
            style={{width: hp(20), height: hp(20)}}
          />
        </Animated.View>
      </Animated.View>

      <View className="flex items-center space-y-2">
        <Text
          className="font-bold text-white tracking-widest"
          style={{fontSize: hp(5)}}>
          Wyc Food
        </Text>
        <Text
          className="font-medium text-white tracking-widest"
          style={{fontSize: hp(2)}}>
          For all your healthy food recipes
        </Text>
      </View>
    </View>
  );
}
