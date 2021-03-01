/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// Copyright (c) 2021 Guless developers and other contributors.
/// https://developers.guless.com/LICENSE.txt
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
declare interface PathData {
    filename?: string;
}
function createAssetModuleFilenameTemplate(defaultFilenameTemplate: string, preserveOutputStructure: boolean = true): string | ((pathData: PathData, assetInfo?: Record<string, any>) => string) {
    return defaultFilenameTemplate;
}

export default createAssetModuleFilenameTemplate;
