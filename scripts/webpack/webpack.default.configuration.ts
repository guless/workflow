/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// Copyright (c) 2021 Guless developers and other contributors.
/// https://developers.guless.com/LICENSE.txt
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import type { Configuration } from "webpack";
import * as path from "path";

function createDefaultWebpackConfiguration(env: Record<string, any> = {}, argv: Record<string, any> = {}): Configuration {
    return {
        resolve: {
            alias: {
                "@": path.resolve(process.cwd(), "./src/"),
            },
            extensions: [
                ".tsx",
                ".ts",
                ".wasm",
                ".mjs",
                ".js",
                ".json",
            ],
        },
    };
}

export default createDefaultWebpackConfiguration;
