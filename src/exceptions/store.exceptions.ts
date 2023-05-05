export class RestaurantTableNotScannedYetError extends Error {
  constructor() {
    super(
      'Please make sure you have a scanned table before using this selector',
    );
  }
}
