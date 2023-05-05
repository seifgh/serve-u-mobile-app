import {SvgXml} from 'react-native-svg';
import {IconComponent} from '../../types';

const AddIcon: IconComponent = ({color, width = 24, height = 24}) =>
  SvgXml({
    xml: `<svg width="${width}" height="${height}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H12" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 12V4" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  });

export default AddIcon;
