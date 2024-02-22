//Product : price, isNew, isSale, title
//Vehicle : wheels, year, brand
//Car: type, model +Product, +Vehicle


interface IProduct {
    price: number, 
    isNew: boolean,
    isSale: boolean, 
    title: string,
}

interface IVehicle {
    wheels: string,
    year: Date, 
    brand: string,
}

interface ICar extends IProduct, IVehicle{
    type: string,
    model: string,
 }
  //  const icar1:ICar{}



type Product ={
    price: number, 
    isNew: boolean,
    isSale: boolean, 
    title: string,
}

type Vehicle ={
    wheels: string,
    year: Date, 
    brand: string,
}

type Car = Product & Vehicle &{
    type: string,
    model: string,
 }

 //const car1: Car{}
