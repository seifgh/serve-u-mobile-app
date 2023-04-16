import {
  FlexContainer,
  PriceTag,
  Spacer,
  StyledImage,
  StyledText,
} from '@src/components';
import {StyledButton} from '@src/components/common/styled-button';
import {BagIcon} from '@src/components/icons';
import React, {FC} from 'react';
import {
  MENU_ITEM_CONTAINER_HEIGHT,
  IMAGE_ACTUAL_DIMENSIONS,
  useStyles,
} from './menu-item-card.style';
import {MenuItemCardProps} from './menu-item-card.type';

const MenuItemCard: FC<MenuItemCardProps> = props => {
  const {image, name, price} = props;
  const styles = useStyles(props);

  return (
    <FlexContainer
      style={styles.container}
      justifyContent="center"
      alignItems="center"
      spacing={'sm'}>
      <StyledImage
        style={styles.image}
        image={{
          ...IMAGE_ACTUAL_DIMENSIONS,
          src: {
            uri:
              'https://lh5.googleusercontent.com/p/AF1QipMG2QUTWQfHGard48Q08OFdwjGlIZxnmt5Gl3-d=w114-h114-n-k-no' ||
              image.path,
          },
        }}
        width={MENU_ITEM_CONTAINER_HEIGHT - 24}
      />
      <Spacer height={12} />
      <FlexContainer fullWidth>
        <StyledText content={name} numberOfLines={1} weight="semi-bold" />
        <FlexContainer
          fullWidth
          flexDirection="row"
          justifyContent="space-between"
          flexWrap="nowrap"
          alignItems="flex-end">
          <PriceTag content={price} />
          <StyledButton icon={BagIcon} size={'sm'} />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default MenuItemCard;
