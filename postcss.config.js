/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// Copyright (c) 2021 Guless developers and other contributors.
/// https://developers.guless.com/LICENSE.txt
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function createPostCSSConfiguration(context) {
    return {
        plugins: {
            "autoprefixer": { overrideBrowserslist: ["defaults"] },
            "cssnano": { preset: "default" },
        },
    };
}

module.exports = createPostCSSConfiguration;
