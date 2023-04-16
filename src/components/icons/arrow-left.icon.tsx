import {SvgXml} from 'react-native-svg';
import {IconComponent} from '../../types';

const ArrowLeftIcon: IconComponent = ({color, width = 24, height = 24}) =>
  SvgXml({
    xml: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
  });

export default ArrowLeftIcon;
