/// <reference types="node" />
export declare class BufferedStdin {
    messages: Array<Uint8Array>;
    constructor();
    bindToFd(stdin_fd: any): void;
    push(message: Uint8Array): void;
    read: (stdinBuffer: Uint8Array | Buffer, offset?: number, length?: number, position?: number | undefined) => number;
    error(message: String): void;
}
