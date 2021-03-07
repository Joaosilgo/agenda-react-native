import * as React from 'react';
import { Switch, View } from 'react-native';

import { useTheme } from './ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const Toggle = () => {
    // We're also pulling setScheme here!
    const { setScheme, isDark } = useTheme();

    const toggleScheme = () => {
        /*
        * setScheme will change the state of the context
        * thus will cause childrens inside the context provider to re-render
        * with the new color scheme
        */
        isDark ? setScheme('light') : setScheme('dark');
    }

    return (
       
            <Switch  trackColor={{ false: "#767577", true: "#616c80" }}
                thumbColor={isDark ? "#283747" : "#d7dbdd"}
                value={isDark}
                
                onValueChange={toggleScheme} />
          
    );
}