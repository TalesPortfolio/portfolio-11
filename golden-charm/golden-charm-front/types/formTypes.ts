export enum GenderEnum {
  female = "FAMALE",
  male = "MALE",
  other = "OTHER",
}


export interface IForm{
    id?:number,
    name:string,
    email:string,
    password:string,
    confirm_Password:string,
    tel:string,
    country: string,
    city:string,
    address:string,
    number: number,
    gender: GenderEnum
}