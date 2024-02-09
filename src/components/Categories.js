import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ScrollView, TouchableOpacity, View, Image, Text } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { categoryData } from '../constants';


export function Categories(props) {

  return (
    <View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="space-x-4"
            contentContainerStyle={{paddingHorizontal: 15}}>

            {
                categoryData.map( (category, index) => (
                    <TouchableOpacity
                        key={index}
                        className="flex items-center space-y-1"
                    >
                        <View className="rounded-full p-[6px]">
                            <Image 
                                className="rounded-full"
                                source={{uri: category.image}}
                                style={{width: hp(6), height: hp(6)}}
                            />
                        </View>
                        <Text className="text-neutral-600">{category.name}</Text>
                    </TouchableOpacity>
                ))
            }
            
        </ScrollView>
    </View>
  );
}

