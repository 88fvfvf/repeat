type TypeBrand = 'bmw' | 'mersedes' | 'lamborghini'
type TypePrice = '$62000' | '$82000' | '$52000'

type TypeCar = `${TypeBrand} ${TypePrice}`

const car:TypeCar = "bmw $52000"