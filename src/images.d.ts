interface OutputMetadata {
    src: string;
    width: number;
    height: number;
    format: string;

    space: string;
    channels: number;
    density: number;
    depth: string;
    hasAlpha: boolean;
    hasProfile: boolean;
    isProgressive: boolean;
}

declare module "*&as=metadata&imagetools-gallery" {
    const outputs: Array<OutputMetadata>;
    export default outputs;
}

declare module "*&as=metadata&imagetools" {
    const outputs: OutputMetadata;
    export default outputs;
}

declare module "*&imagetools-gallery" {
    const outputs: Array<string>;
    export default outputs;
}

declare module "*&imagetools" {
    const outputs: string;
    export default outputs;
}
