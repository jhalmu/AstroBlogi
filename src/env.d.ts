interface ImportMetaEnv {
    readonly GITHUB_TOKEN: string;
    readonly PUBLIC_POKEAPI: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}