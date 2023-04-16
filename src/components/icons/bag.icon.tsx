import {SvgXml} from 'react-native-svg';
import {IconComponent} from '../../types';

const BagIcon: IconComponent = ({color, width = 24, height = 24}) =>
  SvgXml({
    xml: `
<svg width="${width}" height="${height}"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.80994 2L5.18994 5.63" stroke="${color}" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1899 2L18.8099 5.63" stroke="${color}" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 7.84998C2 5.99998 2.99 5.84998 4.22 5.84998H19.78C21.01 5.84998 22 5.99998 22 7.84998C22 9.99998 21.01 9.84998 19.78 9.84998H4.22C2.99 9.84998 2 9.99998 2 7.84998Z" stroke="${color}" stroke-width="1.5"/>
<path d="M9.76001 14V17.55" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14.36 14V17.55" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/> 
<path d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
</svg>`,
  });

export default BagIcon;
