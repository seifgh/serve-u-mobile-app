import {ModuleName} from '../constants/enums';
import {NavigationScreen} from './navigation.type';

export type Module = {
  readonly name: ModuleName;
  readonly screens: NavigationScreen[];
};
