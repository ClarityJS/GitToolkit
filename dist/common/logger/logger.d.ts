declare class Logger {
    private logger;
    private errorLogger;
    constructor();
    info(message: string): void;
    error(message: string): void;
    warn(message: string): void;
    debug(message: string): void;
    chalk: import("chalk").ChalkInstance;
}
export declare const logger: Logger;
export {};
