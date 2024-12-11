declare module '*.png' {
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.jpeg' {
  const value: string
  export default value
}

declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const value: string
  export { ReactComponent }
  export default value
}

interface ImportMetaEnv {
  readonly VITE_API_MELHOR_COM_BASE_URL: string
  readonly VITE_CPF_VALUE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
