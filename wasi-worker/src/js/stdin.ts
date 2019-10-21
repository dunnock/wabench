export class BufferedStdin {
  messages: Array<Uint8Array>;

  constructor() {
    this.messages = new Array;
  }

  bindToFd(stdin_fd: any) {
    stdin_fd.read = this.read;
  }

  push(message: Uint8Array) {
    this.messages.push(message);
  }

  read = (
    stdinBuffer: Buffer | Uint8Array,
    offset: number = 0,
    length: number = stdinBuffer.byteLength,
    position?: number
  ) => {
    if (this.messages.length === 0) {
      return 0;
    } else if (position && position > 0) {
      this.error("BufferedStdin read on position not supported: " + position)
    }
    let message = this.messages.shift();
    if (message && message.length < length) {
      stdinBuffer.set(message);
    } else if (message) {
      this.error("BufferedStdin read on position not supported: " + position)
    } else {
      return 0;
    }
    return message.length;
  }

  error(message: String) {
    let err = new Error("BufferedStdin error: " + message);
    console.error(err);
    throw err
  }
}
