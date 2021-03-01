/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// Copyright (c) 2021 Guless developers and other contributors.
/// https://developers.guless.com/LICENSE.txt
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import type { Configuration } from "webpack";
import merge from "webpack-merge";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import createCompileWebpackConfiguration from "./webpack.compile.configuration";

function createServerWebpackConfiguration(env: Record<string, any> = {}, argv: Record<string, any> = {}): Configuration {
    return merge(createCompileWebpackConfiguration(env, argv), {
        entry: {
            "main": ["./main.ts"],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Guless Application",
                chunks: ["main"],
                filename: "index.html",
                template: require.resolve("./utils/template.html"),
            }),
        ],
    });
}

export default createServerWebpackConfiguration;
