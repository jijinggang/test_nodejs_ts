let re = /declare module "A" {[\s\S]*?\n}/

let str = `
declare module "A" {
    export class A1{
    }
}
declare module "B" {
}
`


//re.compile();
let modA = re.exec(str)[0]
console.log(modA);

