import { EffectFactory, httpListener } from "@marblejs/core";
import { bodyParser$ } from "@marblejs/middleware-body";
import { logger$ } from "@marblejs/middleware-logger";
import { mapTo } from "rxjs/operators";

const helloWorld$ = EffectFactory
    .matchPath('/')
    .matchType('GET')
    .use(request$ => request$.pipe(
        mapTo({
            body: {
                message: 'Hello World!'
            }
        })
    ));

const middlewares = [
    bodyParser$,
    logger$
];

const effects = [
    helloWorld$
];

export const app = httpListener({ middlewares, effects });