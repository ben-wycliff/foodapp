import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';

export function WelcomeScreen(props) {

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
        <StatusBar style="light" />

        <View className="bg-white/20 rounded-full p-10">
            <View className="bg-white/20 rounded-full p-8">
                <Image source={(require('../../assets/images/welcome.png'))} 
                    style={{width: 180, height: 180}}/>
            </View>
        </View>

        <View className="flex items-center space-y-2">
            <Text className="font-bold text-white tracking-widest text-4xl">Wyc Foody</Text>
            <Text className="font-black text-white tracking-widest text-lg">For all your healthy food recipes</Text>
        </View>
    </View>
  );
}
