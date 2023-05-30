/** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: false,
//     compiler: {
//         //see https://styled-components.com/docs/tooling#babel-plugin for more info of the options
//         styledComponents: true,
//     }
// }
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        //see https://styled-components.com/docs/tooling#babel-plugin for more info of the options
        styledComponents: {
            //Enable by default in development, disabled in production to reduce the file size
            //setting this will override the default for all environments 
            displayName: true,
            // Enabled by default
            ssr: true,
            // Empty by default
            fileName: true,
            // Empty by default
            topLevelImportPaths: [],
            // Defaults to ["index"]
            meaninglessFileNames: ["index"],
            // Enabled by default
            cssProp: true,
            // Enabled by default
            namespace: "",
            // Not supported yet
            minify: false,
            // Not supported yet
            transpileTemplateLiterals: false, 
            // Not supported yet
            pure: false,
        }
    }
}
module.exports = nextConfig
