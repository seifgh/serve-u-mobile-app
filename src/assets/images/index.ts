import {ImageAsset} from '@src/types/assets.type';

export const logoImageAsset: ImageAsset = {
  src: require('./logo.png'),
  actualWidth: 422,
  actualHeight: 156,
};

export const qrCodeImageAsset: ImageAsset = {
  src: require('./qr-code.png'),
  actualWidth: 250,
  actualHeight: 250,
};

export const emptyOrderImageAsset: ImageAsset = {
  src: require('./empty-order.png'),
  actualWidth: 300,
  actualHeight: 164,
};
