import {logoImageAsset} from '@src/assets';
import {Pressable, StyledImage} from '@src/components';
import React, {FC} from 'react';
import {useStyles} from './logo.style';
import {LogoProps} from './logo.type';

const Logo: FC<LogoProps> = props => {
  const styles = useStyles(props);

  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <StyledImage style={styles.image} image={logoImageAsset} />
    </Pressable>
  );
};

export default Logo;
