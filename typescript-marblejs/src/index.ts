import { createContext } from "@marblejs/core";
import { createServer } from "http";
import httpListener from "./app";

const httpListenerWithContext = httpListener
    .run(createContext());

export const httpServer = createServer(httpListenerWithContext).listen(3000);