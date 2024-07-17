export class HandledError extends Error {
  public handled = true;

  constructor(error: unknown) {
    super(String(error).toString());

    if (typeof error !== 'string') this.cause = error;
  }
}
