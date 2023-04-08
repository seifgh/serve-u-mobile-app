import {DimensionsStyle, ImageProp} from '@src/types';

export const imagesUtil = {
  getImageAutoHeightDimensions(
    imageAsset: ImageProp,
    toWidth: number,
    maxWidth?: number,
  ): DimensionsStyle {
    const {actualWidth, actualHeight} = imageAsset;

    if (maxWidth && toWidth > maxWidth) {
      toWidth = maxWidth;
    }
    return {
      width: toWidth,
      height: actualHeight * (toWidth / actualWidth),
    };
  },
  getImageAutoWidthDimensions(
    imageAsset: ImageProp,
    toHeight: number,
    maxHeight?: number,
  ): DimensionsStyle {
    const {width: height, height: width} = this.getImageAutoHeightDimensions(
      {
        ...imageAsset,
        actualWidth: imageAsset.actualHeight,
        actualHeight: imageAsset.actualWidth,
      },
      toHeight,
      maxHeight,
    );
    return {
      width,
      height,
    };
  },
};
