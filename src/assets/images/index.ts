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

export const requestedOrderImageAsset: ImageAsset = {
  src: require('./requested-order.png'),
  actualWidth: 626,
  actualHeight: 458,
};

export const confirmedOrderImageAsset: ImageAsset = {
  src: require('./confirmed-order.png'),
  actualWidth: 1446,
  actualHeight: 1341,
};
