type TypeReturn = {
    name: string
}

function getChanel(name: string): TypeReturn {
    return { name }
}

const getChanelName = (name: string): TypeReturn => {
    return { name }
}

const getNumbers = (...numbers: number[]) => {
    return numbers
}

function getCar(name: string,price?:number): string {
    return price ? `Name ${name} price: ${price}` : `Name ${name}`
}

const car1 = getCar('bmw')
const car2 = getCar('mersedes', 10000)