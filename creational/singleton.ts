class Logger {
    private constructor () {}
    static instance: Logger;

    static getInstance(): Logger {
        if (!this.instance) {
            this.instance = new Logger();
        }
        return this.instance;
    }

    log(message: string): void {
        console.log(message);
    }
}

const logger = Logger.getInstance();
logger.log("This is a log message.");

const anotherLogger = Logger.getInstance();
console.log(logger === anotherLogger);