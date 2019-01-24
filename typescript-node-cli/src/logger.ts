import * as winston from "winston";

export const logger = winston.createLogger({
    exitOnError: true,
    transports: [
        new winston.transports.Console({
            handleExceptions: true
        })
    ]
})