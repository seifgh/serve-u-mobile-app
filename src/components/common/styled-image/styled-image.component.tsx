import {Image} from '@src/components';
import React, {FC} from 'react';
import {useStyles} from './styled-image.style';
import {StyledImageProps} from './styled-image.type';

const StyledImage: FC<StyledImageProps> = props => {
  const styles = useStyles(props);

  return <Image style={[styles.image, props.style]} source={props.image.src} />;
};

export default StyledImage;
