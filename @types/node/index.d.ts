declare var nodeProcess: {
  env: {
    NODE_ENV: string,
    EDVISOR_API_SERVER_V2_URL: string,
    EDVISOR_IMGIX_URL: string,
    EDVISOR_S3_BUCKET_URL: string,
    EDVISOR_SENTRY_PUBLIC_DSN: string,
    REACT_APP_API_SERVER: string,
    EDVISOR_VERSION: string
  }
}

declare namespace NodeJS {
  interface ReadableStream {

  }
}

declare module "*.json" {
  const value: any
  export default value
}