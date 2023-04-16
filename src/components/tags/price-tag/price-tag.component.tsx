import {StyledText} from '@src/components/common';
import {useFormatPrice} from '@src/hooks';
import React, {FC} from 'react';
import {PriceTagProps} from './price-tag.type';

const PriceTag: FC<PriceTagProps> = props => {
  const formattedPrice = useFormatPrice(props.content);

  return (
    <StyledText
      content={formattedPrice}
      color="price"
      weight="semi-bold"
      {...props.styledTextProps}
    />
  );
};

export default PriceTag;
