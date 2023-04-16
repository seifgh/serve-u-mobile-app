const CURRENCY = 'TND'; // it might change based on the restaurant
export const useFormatPrice = (price: number) => {
  return `${price} ${CURRENCY}`;
};
