export class HandledError extends Error {
  public handled = true;

  constructor(error: unknown) {
    console.log({ error });
    super(String(error));

    if (typeof error !== 'string') this.cause = error;
  }
}
