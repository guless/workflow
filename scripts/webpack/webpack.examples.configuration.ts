/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// Copyright (c) 2021 Guless developers and other contributors.
/// https://developers.guless.com/LICENSE.txt
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import type { Configuration } from "webpack";
import merge from "webpack-merge";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import createCompileWebpackConfiguration from "./webpack.compile.configuration";

function createExamplesWebpackConfiguration(env: Record<string, any> = {}, argv: Record<string, any> = {}): Configuration {
    if (env.source === void 0) { env.source = "./examples/"; }
    if (env.output === void 0) { env.output = "./examples/dist/"; }

    return merge(createCompileWebpackConfiguration(env, argv), {
        entry: {
            "main": ["./main.ts"],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Guless Examples",
                chunks: ["main"],
                filename: "index.html",
                template: require.resolve("./utils/template.html"),
            }),
        ],
    });
}

export default createExamplesWebpackConfiguration;
