import * as React from 'react';
import {View, Text, StatusBar, ScrollView, Image, TextInput} from 'react-native';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Categories } from '../components/Categories';
// import { } from 'react-native-svg';

function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp(5)}}
        className="space-y-6 pt-8">
        {/* avatar and bell icon top row */}
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={require('../../assets/images/user-avatar.png')}
            style={{width: hp(5), height: hp(5)}}
          />
          <BellIcon size={hp(5)} color="gray" />
        </View>

        {/* greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text className="text-neutral-600" style={{fontSize: hp(1.7)}}>
            Hi, Ben Wycliff!
          </Text>
          <View>
            <Text
              className="text-neutral-600 font-semibold"
              style={{fontSize: hp(3.5)}}>
              Let's Make Our Own Food,
            </Text>
          </View>
          <Text
            className="text-neutral-600 font-semibold"
            style={{fontSize: hp(3.5)}}>
            find a <Text className="text-amber-400">recipe</Text>
          </Text>
        </View>

        {/* search bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
            <TextInput 
                placeholder='Search for a recipe'
                placeholderTextColor={'gray'}
                className="flex-1 text-base tracking-wider pl-3 mb-1 py-1"
                style={{fontSize: hp(1.7)}}/>

            <View className="mr-2 bg-white rounded-full p-2">
                <MagnifyingGlassIcon color="gray" size={hp(2)} />
            </View>
        </View>

        {/* Categories */}

        <View>
            <Categories />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
