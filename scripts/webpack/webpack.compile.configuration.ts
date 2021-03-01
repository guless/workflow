/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// Copyright (c) 2021 Guless developers and other contributors.
/// https://developers.guless.com/LICENSE.txt
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import type { Configuration } from "webpack";
import * as path from "path";
import merge from "webpack-merge";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
import * as OnceImporter from "node-sass-once-importer";
import * as JSON5 from "json5";
import * as PLIST from "plist";
import createDefaultWebpackConfiguration from "./webpack.default.configuration";
import createAssetModuleFilenameTemplate from "./utils/createAssetModuleFilenameTemplate";

function createCompileWebpackConfiguration(env: Record<string, any> = {}, argv: Record<string, any> = {}): Configuration {
    const source: string = path.resolve(env.source || "./src/");
    const output: string = path.resolve(env.output || "./dist/");

    return merge(createDefaultWebpackConfiguration(env, argv), {
        context: source,
        mode: env.WEBPACK_SERVE === true ? "development" : "production",
        output: {
            path: output,
            publicPath: (env.publicPath || ""),
            filename: (env.filename || "[name].[contenthash:6].js"),
            assetModuleFilename: (env.assetFilename || createAssetModuleFilenameTemplate("[name].[contenthash:6][ext]")),
        },
        module: {
            rules: [
                {
                    test: /\.tsx?(?:\?.*)?$/i,
                    use: [
                        {
                            loader: "ts-loader",
                            options: { configFile: path.resolve(source, env.tsconfig || "./tsconfig.json") },
                        },
                    ],
                },
                {
                    test: /\.s?css(?:\?.*)?$/i,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: "css-loader",
                        },
                        {
                            loader: "postcss-loader",
                        },
                        {
                            loader: "sass-loader",
                            options: { sassOptions: { importer: OnceImporter() } },
                        },
                    ],
                },
                {
                    test: /\.(?:glsl|vert|frag)(?:\?.*)?$/i,
                    type: "asset/source",
                },
                {
                    test: /\.(?:json|plist|txt|xml)(?:\?.*)?$/i,
                    oneOf: [
                        {
                            test: /\.json(?:\?.*)?$/i,
                            resourceQuery: /source/i,
                            type: "json",
                            parser: { parse: JSON5.parse },
                        },
                        {
                            test: /\.plist(?:\?.*)?$/i,
                            resourceQuery: /source/i,
                            type: "json",
                            parser: { parse: PLIST.parse },
                        },
                        {
                            resourceQuery: /source/i,
                            type: "asset/source",
                        },
                        {
                            type: "asset/resource",
                            generator: { filename: (env.dataFilename || createAssetModuleFilenameTemplate("data/[name].[contenthash:6][ext]")) },
                        },
                    ],
                },
                {
                    test: /\.(?:png|jpe?g|gif|svg|webp|bmp|ico|tiff)(?:\?.*)?$/i,
                    oneOf: [
                        {
                            test: /\.svg(?:\?.*)?$/i,
                            resourceQuery: /source/i,
                            type: "asset/source",
                        },
                        {
                            resourceQuery: /inline/i,
                            type: "asset/inline",
                        },
                        {
                            type: "asset/resource",
                            generator: { filename: (env.imageFilename || createAssetModuleFilenameTemplate("images/[name].[contenthash:6][ext]")) },
                        },
                    ],
                },
                {
                    test: /\.(?:aac|flac|mpe?g|mp3|mp4|m4a|m4p|m4v|ogg|oga|ogv|mov|wav|webm)(?:\?.*)?$/i,
                    oneOf: [
                        {
                            resourceQuery: /inline/i,
                            type: "asset/inline",
                        },
                        {
                            type: "asset/resource",
                            generator: { filename: (env.mediaFilename || createAssetModuleFilenameTemplate("media/[name].[contenthash:6][ext]")) },
                        },
                    ],
                },
                {
                    test: /\.(?:woff|woff2|eot|ttf|otf)(?:\?.*)?$/i,
                    oneOf: [
                        {
                            resourceQuery: /inline/i,
                            type: "asset/inline",
                        },
                        {
                            type: "asset/resource",
                            generator: { filename: (env.fontFilename || createAssetModuleFilenameTemplate("fonts/[name].[contenthash:6][ext]")) },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({ filename: env.cssFilename || "[name].[contenthash:6].css" }),
        ],
    });
}

export default createCompileWebpackConfiguration;
