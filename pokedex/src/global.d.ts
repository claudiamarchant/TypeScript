/*para ocupar modulos de css con react */
declare module "*.module.css" {
    const classes: { [key: string]: string}
    export default classes
}

declare module "*.png"
declare module "*.svg"
declare module "*.gif"