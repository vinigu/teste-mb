interface IValidationExceptionProps {
  [key: string]: string[];
}

interface IValidationException {
  field: string;
  message: string;
}

class ValidationException extends Error {
  public errors: IValidationException[] = [];

  constructor(errors: IValidationExceptionProps) {
    super('ValidationException');
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.name = 'ValidationException';

    Object.keys(errors).forEach((key) => {
      this.errors.push({ field: key, message: errors[key][0] });
    });
  }
}

export default ValidationException;
