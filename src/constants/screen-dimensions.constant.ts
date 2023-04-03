import {Dimensions, StatusBar} from 'react-native';

export const WINDOW = Dimensions.get('window');
export const SCREEN = Dimensions.get('screen');

export const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 18;
