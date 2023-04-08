import {View} from '@src/components';
import React, {FC} from 'react';
import {useStyles} from './spacer.style';
import {SpacerProps} from './spacer.type';

const Spacer: FC<SpacerProps> = props => {
  const styles = useStyles(props);

  return <View style={styles.container} />;
};

export default Spacer;
