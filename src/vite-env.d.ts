/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ROUTER?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
