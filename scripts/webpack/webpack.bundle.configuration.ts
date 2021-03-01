/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// Copyright (c) 2021 Guless developers and other contributors.
/// https://developers.guless.com/LICENSE.txt
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import type { Configuration } from "webpack";
import merge from "webpack-merge";
import pkg from "../npm/package";
import sanitize from "./utils/sanitize";
import createCompileWebpackConfiguration from "./webpack.compile.configuration";

const BUNDLE_NAME: string = `${sanitize(pkg.name, "-")}`;
const BUNDLE_VERSION: string = `${pkg.version}`;

function createBundleWebpackConfiguration(env: Record<string, any> = {}, argv: Record<string, any> = {}): Configuration {
    env.filename = env.filename || `${BUNDLE_NAME}-${BUNDLE_VERSION}.js`;
    env.cssFilename = env.cssFilename || `${BUNDLE_NAME}-${BUNDLE_VERSION}.css`;

    return merge(createCompileWebpackConfiguration(env, argv), {
        entry: {
            "main": ["./main.ts"],
        },
        output: {
            library: BUNDLE_NAME.split("-"),
            libraryTarget: "umd",
        },
    });
}

export default createBundleWebpackConfiguration;
