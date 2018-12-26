// AppError - Base exception class. Inherit other exceptions from this class.
class AppError {
  constructor(originalError) {
    this.originalError = originalError;
  }

  getMessage = () =>
    this.originalError.message
      ? this.originalError.message
      : JSON.stringify(this.originalError);
}

export default AppError;
