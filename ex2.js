class car{
    constructor (brand, plate,color,deposit,fuelType){
    this.brand=brand
    this.plate=plate
    this.color=color
    this.deposit=deposit
    this.fuelType=fuelType
}
updateCarColor(newColor){
    this.color=newColor
}
updateCarDeposit(liters){
    this.deposit=this.deposit+liters
}
drive(nKms){
    const liters =nKms*5/100
    this.deposit=this.deposit-liters
}
}
const car1=new Car ('Ford', '91-GH-15', 'verde', 40, 'Gasóleo')
const car2=new Car ('Opel', '23-AB-23', 'branco', 50, 'Gasolina')
const car3=new Car ('Nissan', '12-CX-45', 'preto', 22, 'Gasóleo')

const cars=[]
cars.push(car1,car2,car3)

console.log(getCarNumberByBrand('Ford'))
console.log(getCarDepositByFuelType('Gasóleo'))

function getCarNumberByBrand(brand){
    let cont=0
    for (const car of cars) {
        if (car.brand===brand){
        cont++ 
        }
    }
    return cont
}

function getCarDepositByFuelType(fuelType){
    let sum=0
    for (const car of cars) {
        if (car.fuelType===fuelType){
        cont++ 
        }
    }
    return sum
}